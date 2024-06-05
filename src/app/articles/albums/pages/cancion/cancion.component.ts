import { CommonModule } from '@angular/common';
import { Component ,EventEmitter,Input, OnInit,Output} from '@angular/core';
import { AlbumsService } from '../../service/albums.service';
import { Album, Cancion } from '../../../../shared/modules/albums';

@Component({
  selector: 'app-cancion',
  standalone: true,
  imports: [],
  templateUrl: './cancion.component.html',
  styleUrl: './cancion.component.css'
})
export class CancionComponent implements OnInit{
  

  @Input() dataHttp:any

  listaAlbumHttp:Array<Album>=[]
  constructor(private albumService:AlbumsService){}

  ngOnInit(): void {
   this.cargarAlbumHttp()
  }
  seleccionCancion(song: any) {
    this.albumService.setCancion(song)
  }
  async cargarAlbumHttp():Promise<any>{
    this.listaAlbumHttp= await this.albumService.getBDHttp().toPromise()
    this.dataHttp=this.listaAlbumHttp[0]
    console.log(this.dataHttp)
  }

}
