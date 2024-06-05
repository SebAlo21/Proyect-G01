import { CommonModule } from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';
import { AlbumsService } from '../../../albums/service/albums.service';

@Component({
  selector: 'app-listcancion',
  standalone: true,
  imports: [],
  templateUrl: './listcancion.component.html',
  styleUrl: './listcancion.component.css'
})
export class ListcancionComponent implements OnInit {
  @Input() canciones:any[]=[]
  //lista:any
  //playlists: any[]=[];

  //selectedSongs = new Set<any>();
  constructor(private musicService:AlbumsService){}

  seleccionCancion(cancion: any) { 
   this.musicService.setCancion(cancion)
   console.log(cancion)
   //this.selectedSongs.add(cancion);
     
  }
  createPlaylist(){
    /*
    this.musicService.createPlaylist("Playlist1", Array.from(this.selectedSongs));
    this.playlists=this.musicService.getPlaylist()
    console.log(this.playlists)
    this.selectedSongs.clear()
    */
    
  }
  ngOnInit(): void {
    
  }
}
