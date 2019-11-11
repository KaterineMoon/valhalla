import { Injectable } from '@angular/core';
import { Empleado } from 'src/app/modelos/empleado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  public persona : Empleado;
  url = "http://localhost:3977/api/";

  constructor(
    private _httpClientService: HttpClientService,
    private _http: HttpClient
  ) { }

  ngOnInit() {
  }

  actualizar(id, persona){
    let params = JSON.stringify(persona);
    let options = {
      headers: new HttpHeaders(
        {'Content-Type': 'application/json'})};
    return this._http.put(
      this.url + 'usuario/' + id,
      params,
      options
    ).pipe(map(res => res));
  }
}
