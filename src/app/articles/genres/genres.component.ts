import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../shared/service/interfaceApi';
import { spotifyService } from '../../shared/service/spotifyApi';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css'
})
export class GenresComponent implements OnInit{

  constructor(private categorie:spotifyService){}

tokenVariable:string=''
listaGeneros:Categorie[]=[]


ngOnInit(): void {
  this.cargarDataFetch()
}

async cargarDataFetch(){
  this.tokenVariable= await this.categorie.spotifyToken()
  console.log(this.tokenVariable)

  this.listaGeneros= await this.categorie.cargarGeneros(this.tokenVariable)
  console.log("Albums Fetch",this.listaGeneros)
}

}
