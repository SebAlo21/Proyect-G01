import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class playlistService {

  private dataBehaviorSubject = new BehaviorSubject<any>(null);
  currentData = this.dataBehaviorSubject.asObservable();

  changeData(data: any) {
    this.dataBehaviorSubject.next(data); 
  }

  constructor(private httpClient:HttpClient) { }


  listarPlaylist(token:any):Observable<any>{
    return this.httpClient.get(`http://localhost:5000/api/auth/user-playlist`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
