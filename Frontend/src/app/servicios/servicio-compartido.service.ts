import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCompartidoService {

  public logue = new Subject<any>();
  public logueEmitido = this.logue.asObservable();
  emitirLogueo(usuarioLogueado:any){
    this.logue.next(usuarioLogueado);
  }

  public logueEmpresa = new Subject<any>();
  public logueEmpresaEmitido = this.logueEmpresa.asObservable();
  emitirLogueoEmpresa(empresaLogueada:any){
    this.logue.next(empresaLogueada);
  }
}
