import { Injectable } from '@angular/core';
import * as dataRaw from '../../../core/bd.json';
import { Album, Cancion } from '../../../shared/modules/albums';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {


  dataBd:Array<any>[]=[]
  listaAlbum:Album[]=[]
  private playlists: any[] = [];
  public audio!:HTMLAudioElement

  constructor(private httpClient:HttpClient) {
    this.audio=new Audio()
  }
   
  setCancion(cancion:Cancion){
    this.audio.src=`http://localhost:5000/${cancion.url}`
    this.audio.play()
  }

  getBDHttp():Observable<any>{
    return this.httpClient.get(`http://localhost:5000/api/album`)
    .pipe(
      map((dataRaw:any)=>{
        return dataRaw.listAll
      })
    )
  }
  getAllSongHttp(){
     return this.getBDHttp().pipe(
      map((albums:Album[])=>{
        return albums.reduce((listaCanciones:any,albumInterator:Album)=>{
          const agregar=albumInterator.cancion.map((cancion:Cancion)=>({
            url:cancion.url,nombre:cancion.nombre,tiempo:cancion.tiempo,
            albumNombre:albumInterator.nombre,
            artistaNombre:albumInterator.artista.nombre,artistaImagen:albumInterator.artista.imagen
          }))
          return listaCanciones.concat(agregar)
        },[])
      })
     )
  }
 
  getBusquedaHttp(buscar:string){
    return this.getAllSongHttp().pipe(
      map((canciones=>
        canciones.filter((cancion:{nombre:string,albumNombre:string,artistaNombre:string})=>
          cancion.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
          cancion.albumNombre.toLowerCase().includes(buscar.toLowerCase()) ||
          cancion.artistaNombre.toLowerCase().includes(buscar.toLowerCase())
        )
      ))
    ) 
  }
 

  createPlaylist(nombre:string,canciones:Cancion[]){
      const playList={
        nombre,canciones
      }
      this.playlists.push(playList)
  }
  getPlaylist(){
    return this.playlists
  }
   
 
 
}
