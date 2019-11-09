import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// cliente http hacer peticiones al backend
import { map } from 'rxjs/operators';
//se importa map, libreria para mapear objetos
import { Observable } from 'rxjs'
//recojer respuestas de cuando hacemos una peticion ajax al servidor

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = "http://localhost:3977/api/";

  constructor(
    private _http: HttpClient
  ) { }

  afiliar(usuario) {
    let params = JSON.stringify(usuario);
    let options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' })};
    return this._http.post(
      this.url + "usuario",
      params,
      options
    ).pipe(map(res => res));
  }
}
