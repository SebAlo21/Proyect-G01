import { Injectable } from '@angular/core'; 
import { Album, Cancion } from '../../modules/albums';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {


  dataBd:Array<any>[]=[]
  listaAlbum:Album[]=[]
  public audio!:HTMLAudioElement

  constructor(private httpClient:HttpClient) {
    this.audio=new Audio()
  }
   
  setCancion(cancion:Cancion){
    this.audio.src=`http://localhost:5000/${cancion.url}`
    this.audio.play()
  }
  setPause(){
    this.audio.pause()
  }

  getBDHttp(){
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
          const nuevoArreglo=albumInterator.cancion.map((cancion:Cancion)=>({
            url:cancion.url,nombre:cancion.nombre,tiempo:cancion.tiempo,
            albumNombre:albumInterator.nombre,albumImagen:albumInterator.image,
            artistaNombre:albumInterator.artista.nombre,artistaImagen:cancion.artistaImagen
          }))
          return listaCanciones.concat(nuevoArreglo)
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
  
   
 
 
}
