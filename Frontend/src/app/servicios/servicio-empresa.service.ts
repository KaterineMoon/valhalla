import { Injectable } from "@angular/core";
import { Empresa } from "src/app/modelos/empresa";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ServicioEmpresaService {
  public empresa: Empresa;
  url = "http://localhost:3977/api/";

  constructor(private _http: HttpClient) {}

  ngOnInit() {}

  registrar(empresa) {
    let params = JSON.stringify(empresa);
    let options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http
      .post(this.url + "empresa", params, options)
      .pipe(map(res => res));
  }

  login(empresa) {
    let params = JSON.stringify(empresa);
    let options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http
      .post(this.url + "empresa-login", params, options)
      .pipe(map(res => res));
  }

  actualizar(id, empresa) {
    let params = JSON.stringify(empresa);
    let options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http
      .put(this.url + "empresa/" + id, params, options)
      .pipe(map(res => res));
  }
}
