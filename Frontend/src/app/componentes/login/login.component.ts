import { Component, OnInit } from '@angular/core';
//import { Empleado } from '../../modelos/empleado';
// import { EmpleadoService } from 'src/app/servicios/empleado.service';
// import { Router, ActivatedRoute, Params } from '@angular/router';
// import { CompartidoService } from 'src/app/servicios/compartido.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  /*
  empleado: Empleado;
  loginCorrecto;

  constructor(
    private _empleadoService: EmpleadoService,
    private _router: Router,
    private _compartidoService: CompartidoService
  ) {
    if(localStorage.getItem("sesion") != null){
      this._router.navigate(['/menu']);
    }
    this.empleado = new Empleado('', '', null, '', '', '', '');
  }

  ngOnInit() {
  }

  login() {
    this._empleadoService.login(this.empleado).subscribe(
      (response: any) => {
        if (response.usuario) {
          let empleadoLogueado = new Empleado(
            response.empleado._id,
            response.empleado.nombre,
            response.empleado.apellido,
            response.empleado.cedula,
            response.empleado.password,
            response.empleado.edad,
            response.empleado.empresa,
            response.empleado.fechaIngreso,
            response.empleado.cargo,
            response.empleado.salario,
            response.empleado.afiliacionPensiones,
            response.empleado.afiliacionCesantias

          )
            
            localStorage.setItem("sesion",JSON.stringify(empleadoLogueado));
            this._compartidoService.emitirLogueo(true);
            this._router.navigate(['/menu'])
            
        } else {
          this.loginCorrecto = "Los datos ingresados son incorrectos. Pruebe nuevamente.";
        }
      }, error => {
        if (error != null) {
          console.log(error)
        }
      }
    )
  }
*/}
