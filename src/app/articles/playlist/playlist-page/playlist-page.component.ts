import { Component } from '@angular/core';
import { PlaylistComponent } from '../pages/playlist/playlist.component';
import { CommonModule } from '@angular/common';
import { CancionesComponent } from '../pages/canciones/canciones.component';
import { CookieService } from 'ngx-cookie-service';
import { playlistService } from '../services/playlist-service';

@Component({
  selector: 'app-playlist-page',
  standalone: true,
  imports: [PlaylistComponent,CommonModule,CancionesComponent],
  templateUrl: './playlist-page.component.html',
  styleUrl: './playlist-page.component.css'
})
export class PlaylistPageComponent {
  listaPlaylist:any
  playlist:any
  token:any
  constructor(private cokkie:CookieService,private playlistService:playlistService){
    if( this.getToken()){
       this.token=this.getToken()
       this.cargarPlaylist()
    }
  }

  getToken():string{
    return this.cokkie.get('tokenUsuario')
  }
  obtenerPlaylist(objPlaylist:any){ 
  this.playlist=objPlaylist 
  }
  async cargarPlaylist():Promise<any>{ 
    const response=await this.playlistService.listarPlaylist(this.token).toPromise()
    if(response.data.length>0){ 
      this.listaPlaylist=response.data  
    }
  }

}
