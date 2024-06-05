import { CommonModule } from '@angular/common';
import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { AlbumsService } from '../../service/albums.service';
import { Album } from '../../../../shared/modules/albums';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent implements OnInit{

  listaAlbumHttp:Array<Album>=[]
  @Output() datosAlbum = new EventEmitter<any>();

  constructor(private musicService:AlbumsService){}
  
  seleccionAlbum(album: any) { 
    this.datosAlbum.emit(album)
  }

  ngOnInit(): void { 
   this.cargarAlbumHttp()
  }

  async cargarAlbumHttp():Promise<any>{
    this.listaAlbumHttp= await this.musicService.getBDHttp().toPromise()
    
  }

}
