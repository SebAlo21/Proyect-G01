import { Component, OnInit } from '@angular/core';
import { Album } from '../../shared/service/interfaceApi';
import { spotifyService } from '../../shared/service/spotifyApi';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css'
})
export class MyListComponent implements OnInit{

  constructor(private album:spotifyService){}

  listaAlbum:Album[]=[]
  tokenVariable:string=''

  ngOnInit(): void {
    this.cargarDataFetch()
  }
  async cargarDataFetch(){
    this.tokenVariable= await this.album.spotifyToken()
    console.log(this.tokenVariable)
  
    this.listaAlbum= await this.album.cargarAlbum(this.tokenVariable)
    console.log("Albums Fetch",this.listaAlbum)
  }

}
