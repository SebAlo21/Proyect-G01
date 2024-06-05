import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../albums/service/albums.service';
import { ListcancionComponent } from '../pages/listcancion/listcancion.component';
import { SearchComponent } from '../pages/search/search.component';

@Component({
  selector: 'app-search-cancion',
  standalone: true,
  imports: [ListcancionComponent,SearchComponent],
  templateUrl: './search-cancion.component.html',
  styleUrl: './search-cancion.component.css'
})
export class SearchCancionComponent implements OnInit {


  obtenerCancionesHttp:any
  constructor(private generoService:AlbumsService){}
  ngOnInit(): void {
   this.cargarCancionesHttp()
  }
  async cargarCancionesHttp():Promise<any>{
    this.obtenerCancionesHttp= await this.generoService.getAllSongHttp().toPromise()
     
  }
  parametroBusqueda(event:string):void{ 
    this.cargarCancionHttp(event)  
  }
  async cargarCancionHttp(event:string):Promise<any>{
    this.obtenerCancionesHttp= await this.generoService.getBusquedaHttp(event).toPromise()
    
  }
}
