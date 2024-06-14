import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../service/usuario/user-profile.service';
import { CookieService } from 'ngx-cookie-service';
import { playlistService } from '../../articles/playlist/services/playlist-service';
import { AlbumsService } from '../service/album/albums.service';

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent implements OnInit {
  constructor(private userProfile:UserProfileService,private cokkie:CookieService,private playlistServ:playlistService,private albumService:AlbumsService){}

  usuario:any
  cancion:any

  ngOnInit(): void {
  
    console.log(this.checkCookieSession())
    if(this.checkCookieSession()){
      this.usuarioDetalle()
    }
    this.cargarCancion()
  }

  checkCookieSession():boolean{
    try {
      const token:boolean=this.cokkie.check('tokenUsuario')
      return token
    } catch (error) {
      console.log("No ha iniciado sesion")
      return false
    }
  }

  async usuarioDetalle():Promise<any>{
    const tok=this.cokkie.get('tokenUsuario');
    const response=await this.userProfile.detalleUsuario(tok).toPromise()
    this.usuario=response.data 
  }
  async cargarCancion(){
    this.playlistServ.currentData.subscribe(data => {
      this.cancion = data;
      console.log(this.cancion)
    });
    
  }
  pausarCancion(){
    this.albumService.setPause()
  }
}
