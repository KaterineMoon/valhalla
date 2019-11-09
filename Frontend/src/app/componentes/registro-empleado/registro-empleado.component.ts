import { Component, OnInit } from '@angular/core';
//import { Empleado } from '../../modelos/empleado';
// import { EmpleadoService } from '../../servicios/empleado.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.scss'],
  providers:[]
})
export class RegistroEmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /*
  empleado: Empleado;
  registroCorrecto;

  constructor(
    private _empleadoService : EmpleadoService,
    private _router : Router
  ) {
    if(localStorage.getItem("sesion") != null){
      this._router.navigate(['/menu']);
    }
    this.empleado = new Empleado('', '', null, '', '', '', '');
  }

  ngOnInit() {
  }

  registrar() {
    this._empleadoService.registrar(this.empleado).subscribe(
      (response: any) => {
        if (response.empleado) {
          this.registroCorrecto = "El registro es correcto. Puede iniciar sesión con el número de cédula "+this.empleado.cedula;
        } else {
          this.registroCorrecto = "El registro no se ha podido realizar. Inténtelo de nuevo ";
        }
      }, error => {
        if (error != null) {
          console.log(error)
        }
      }
    )
  }*/
}
