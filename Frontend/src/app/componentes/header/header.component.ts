
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServicioCompartidoService } from '../../servicios/servicio-compartido.service'; 
// import { ServicioEmpresaService } from '../../servicios/servicio-empresa.service'; 



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  empleadoLogueado = false;
  empresaLogueada=false;
  constructor(
    private _compartidoService:ServicioCompartidoService,
    private _compartidoServiceEmpresa:ServicioCompartidoService,
    private _router: Router
  ) { 

    
    if(localStorage.getItem("sesion") != null){
      this.empleadoLogueado = true;
    }

    if(localStorage.getItem("sesionEmpresa") != null){
      this.empresaLogueada = true;
    }

    this._compartidoService.logueEmitido.subscribe(
      empleadoLogueado =>{
        this.empleadoLogueado = empleadoLogueado;
      }
    )

    this._compartidoServiceEmpresa.logueEmitidoEmpresa.subscribe(
      empresaLogueada =>{
        this.empresaLogueada = empresaLogueada;
      }
    )
  }

  ngOnInit() {
  }

  cerrarSesion(){
    this.empleadoLogueado = false;
    localStorage.removeItem("sesion");
    this._router.navigate(['/'])
  }

  cerrarSesionEmpresa(){
    this.empresaLogueada= false;
    localStorage.removeItem("sesionEmpresa");
    this._router.navigate(['/'])
  }

}
