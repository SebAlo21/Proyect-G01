import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class loginServices {

  constructor(private httpClient:HttpClient) { }

  listaUsuarios(){
    return this.httpClient.get(`http://localhost:5000/api/auth`)
  }
  registrarUsuarios(body:any):Observable<any>{
      
    return this.httpClient.post(`http://localhost:5000/api/auth/register`,body)
  }
   enviarCredencial(body:any):Observable<any>{
   
    return this.httpClient.post(`http://localhost:5000/api/auth/login`,body)
    
  }
  


}
