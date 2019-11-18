import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCompartidoService {

  public logue = new Subject<any>();
  public logueEmitido = this.logue.asObservable();
  emitirLogueo(empleadoLogueado:any){
    this.logue.next(empleadoLogueado);
  }

  public logueE= new Subject<any>();

  public logueEmitidoEmpresa=this.logueE.asObservable();
  emitirLogueoEmpresa(empresaLogueada:any){
    this.logueE.next(empresaLogueada);
  }

}
