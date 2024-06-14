import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input,OnInit,Output } from '@angular/core';
import { AlbumsService } from '../../../../shared/service/album/albums.service';
import { Album } from '../../../../shared/modules/albums';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent  {
  @Output() datosAlbum = new EventEmitter<any>();
  @Input() envioListaAlbum:Array<any>=[]

  constructor(){}
  
  seleccionAlbum(album: any) { 
    this.datosAlbum.emit(album)
  }
 

}
