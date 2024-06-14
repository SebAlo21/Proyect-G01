import { Component,OnInit,Output,Input } from '@angular/core';
import { AlbumComponent } from '../pages/album/album.component';
import { CancionComponent } from '../pages/cancion/cancion.component';
import { AlbumsService } from '../../../shared/service/album/albums.service';
import { CommonModule } from '@angular/common';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Album } from '../../../shared/modules/albums';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-album-cancion',
  standalone: true,
  imports: [AlbumComponent,CancionComponent,CommonModule],
  templateUrl: './album-cancion.component.html',
  styleUrl: './album-cancion.component.css'
})
export class AlbumCancionComponent implements OnInit {
 
  album:Array<Album>=[];
  listaAlbum:Array<Album>=[]
  
   constructor(private albumService:AlbumsService){}
   ngOnInit(): void {
     this.cargarAlbumHttp()
   }

  obtenerAlbum(albumSeleccionado:Array<Album>) { 
    this.album=albumSeleccionado 
    console.log(this.album)
  }
  async cargarAlbumHttp():Promise<any>{
    this.listaAlbum= await this.albumService.getBDHttp().toPromise()
    console.log(this.listaAlbum)
  }
 
}
