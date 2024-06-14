import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../../shared/service/album/albums.service';
import { ListcancionComponent } from '../pages/listcancion/listcancion.component';
import { SearchComponent } from '../pages/search/search.component';
import { CookieService } from 'ngx-cookie-service';
import { playlistService } from '../../playlist/services/playlist-service';

@Component({
  selector: 'app-search-cancion',
  standalone: true,
  imports: [ListcancionComponent,SearchComponent],
  templateUrl: './search-cancion.component.html',
  styleUrl: './search-cancion.component.css'
})
export class SearchCancionComponent implements OnInit {
  envioCanciones:any 
  envioToken:any
  envioPlaylist:any

  constructor(private albumService:AlbumsService,private cokkie:CookieService,private playlistServ:playlistService){}

  ngOnInit(): void {
    if(this.getToken()){
      this.envioToken=this.getToken()
      this.cargarPlaylistUsuario()
    }
   this.listadoCanciones()
  }
  
  getToken():string{
    return this.cokkie.get('tokenUsuario')
  }
  async listadoCanciones():Promise<any>{
    this.envioCanciones= await this.albumService.getAllSongHttp().toPromise()
  }


  async parametroBusqueda(event:string):Promise<any>{ 
    this.envioCanciones= await this.albumService.getBusquedaHttp(event).toPromise()
  }

  async cargarPlaylistUsuario():Promise<any>{ 
    const response=await this.playlistServ.listarPlaylist(this.getToken()).toPromise()
    if(response.data.length>0){ 
      this.envioPlaylist=response.data  
    } 
  }
   
  
 
}
