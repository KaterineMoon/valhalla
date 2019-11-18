import { Injectable } from '@angular/core';
import { Persona } from 'src/app/modelos/nuevaPersona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {
  public afiliado : Persona;
  url = "http://localhost:3977/api/";

  constructor(
    private _httpClientService: AfiliadoService,
    private _http: HttpClient
  ) { }

  afiliar(persona){
    let params = JSON.stringify(persona);
    let options = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json'})};
    return this._http.post(
      this.url + "afiliado-afiliar",
      params,
      options
    ).pipe(map(res => res));
  }
}
