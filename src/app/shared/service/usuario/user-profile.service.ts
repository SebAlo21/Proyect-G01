import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private httpClient:HttpClient) { }

  detalleUsuario(token:any):Observable<any>{
    return this.httpClient.get(`http://localhost:5000/api/auth/user-detalle`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
