import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cancion } from '../../../shared/modules/albums';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class crearPlayListService {
  constructor(private httpClient:HttpClient) { }

  createPlaylist(nombre:string,canciones:Cancion[],token:any):Observable<any>{
       return this.httpClient.post(`http://localhost:5000/api/playlist`,{nombre,canciones} ,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
  actualizarPlaylist(nombre:string,canciones:Cancion[],token:any,idPlaylist:string):Observable<any>{
    return this.httpClient.put(`http://localhost:5000/api/playlist`,{nombre,canciones,idPlaylist} ,{
   headers: {
     'Authorization': `Bearer ${token}`
   }
 });
}

}
