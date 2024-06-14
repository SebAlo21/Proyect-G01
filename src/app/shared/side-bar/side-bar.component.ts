import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../login/pages/login/login.component'; 
import { CookieService } from 'ngx-cookie-service';
import { playlistService } from '../../articles/playlist/services/playlist-service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
 
  constructor(private cokkie:CookieService,private playlistService:playlistService){}

  menuPrincipal:Array<any>=[]
  playlist:Array<any>=[]
  listaRecomendados:Array<any>=[]
  controlBoton:boolean=false
  
   ngOnInit(): void {

    if( this.getToken()){
      this.controlBoton=true
      //this.obtenerPlayList() 
    }

     this.menuPrincipal=[
      {
        name:'principal',
        icon:'fa-house',
        router:['/']
      },
      {
        name:'Album',
        icon:'fa-music',
        router:['/','album']
      }
      ,
      {
        name:'Buscar',
        icon:'fa-magnifying-glass',
        router:['/','buscar']
      }
     ]
    if(this.controlBoton){
      this.menuPrincipal.push( {
        name:'PlayList',
        icon:'fa-list',
        router:['/','playlist']
      } )
    }
   }
   getToken():string{
    return this.cokkie.get('tokenUsuario')
  }
  salirSesion(){
    this.cokkie.delete('tokenUsuario')
  }
  async obtenerPlayList():Promise<any>{
    const response=await this.playlistService.listarPlaylist(this.getToken()).toPromise()
    this.playlist=response.data 
    this.listaRecomendados=this.playlist.slice(0,3)
    console.log(this.listaRecomendados)
  }
}
