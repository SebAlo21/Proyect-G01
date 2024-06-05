import { Component,OnInit,Output,Input } from '@angular/core';
import { AlbumComponent } from '../pages/album/album.component';
import { CancionComponent } from '../pages/cancion/cancion.component';
import { AlbumsService } from '../service/albums.service';
import { CommonModule } from '@angular/common';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Album } from '../../../shared/modules/albums';

@Component({
  selector: 'app-album-cancion',
  standalone: true,
  imports: [AlbumComponent,CancionComponent,CommonModule],
  templateUrl: './album-cancion.component.html',
  styleUrl: './album-cancion.component.css'
})
export class AlbumCancionComponent  {
 
   
  album:Array<Album>=[];

  obtenerAlbum(objAlbum:Array<Album>) {
     
    this.album=objAlbum 
  }
 
}
