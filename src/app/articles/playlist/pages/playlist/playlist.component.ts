import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { playlistService } from '../../services/playlist-service';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent  {

  constructor(){
  }

  @Input() envioPlaylist:any
  @Output() datosPlaylist = new EventEmitter<any>();


  seleccionPlayList(playlist:any){  
    this.datosPlaylist.emit(playlist)
  }


}
