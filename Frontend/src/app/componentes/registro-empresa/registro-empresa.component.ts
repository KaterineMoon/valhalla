import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../modelos/empresa';
import { ServicioEmpresaService } from '../../servicios/servicio-empresa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css'],
  providers:[]
})
export class RegistroEmpresaComponent implements OnInit {
  empresa: Empresa;
  registroCorrecto;

  constructor(
    private _empresaService : ServicioEmpresaService,
    private _router : Router
  ) {
    if(localStorage.getItem("sesion") != null){
      this._router.navigate(['/menu']);
    }
    this.empresa = new Empresa('', '', null, '', '');
  }

  ngOnInit() {
  }

  registrar() {
    this._empresaService.registrar(this.empresa).subscribe(
      (response: any) => {
        if (response.empresa) {
          this.registroCorrecto = "El registro es correcto. Puede iniciar sesión con el NIT "+this.empresa.nit;
        } else {
          this.registroCorrecto = "El registro no se ha podido realizar. Inténtelo de nuevo ";
        }
      }, error => {
        if (error != null) {
          console.log(error)
        }
      }
    )
  }
}
