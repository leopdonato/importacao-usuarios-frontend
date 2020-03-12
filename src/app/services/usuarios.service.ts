import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'multipart/form-data',
      'Access-Control-Allow-Origin': 'http://localhost:8080/',
      'Access-Control-Allow-Credentials': 'true'
    })
  };

  insertIntermediario(obj: FormData): Observable<void> {
    return this.http.post<void>('http://localhost:8080/usuarios', obj);
  }

  deleteIntermediario(): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/usuarios');
  }

  insert(): Observable<Object> {
    return this.http.post<Object>('http://localhost:8080/usuarios/confirmado', {});
  }
}
