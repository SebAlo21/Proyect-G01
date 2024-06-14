import { CommonModule } from '@angular/common';
import { Component ,EventEmitter,Input, OnInit,Output} from '@angular/core';
import { AlbumsService } from '../../../../shared/service/album/albums.service';
import { Album, Cancion } from '../../../../shared/modules/albums';
import { lastValueFrom } from 'rxjs';
import { playlistService } from '../../../playlist/services/playlist-service';

@Component({
  selector: 'app-cancion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cancion.component.html',
  styleUrl: './cancion.component.css'
})
export class CancionComponent implements OnInit{
  

  @Input() albumSeleccionado:any
  listaAlbumHttp:Array<Album>=[] 

  constructor(private albumService:AlbumsService,private playlistService:playlistService){}

  ngOnInit(): void {
   this.cargarAlbumHttp()
  }
  playCancion(cancion: any) {
    this.albumService.setCancion(cancion)
    this.playlistService.changeData(cancion)
  }
  async cargarAlbumHttp():Promise<any>{
    this.listaAlbumHttp= await this.albumService.getBDHttp().toPromise()
    this.albumSeleccionado=this.listaAlbumHttp[0] 
    console.log(this.albumSeleccionado)
  }

}
