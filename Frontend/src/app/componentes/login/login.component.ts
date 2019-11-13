import { Component, OnInit, OnDestroy } from "@angular/core";
import { Empleado } from "../../modelos/empleado";
// import { Empresa } from "src/app/modelos/empresa";
import { HttpClientService } from "../../servicios/http-client.service";
// import { ServicioEmpresaService } from "../../servicios/servicio-empresa.service";
import { ServicioCompartidoService } from "../../servicios/servicio-compartido.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  empleado: Empleado;
  // empresa: Empresa;
  loginCorrecto;

  constructor(
    private _httpClientService: HttpClientService,
    private _router: Router,
    private _compartidoService: ServicioCompartidoService
  ) // private _empresaService: ServicioEmpresaService
  {
    if (localStorage.getItem("sesion") != null) {
      this._router.navigate(["/perfil-empleado"]);
    }
    this.empleado = new Empleado(
      "",
      "",
      "",
      null,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      null,
      "",
      null,
      ""
    );
    // this.empresa = new Empresa("", "", null, "", "");
  }

  ngOnInit() {}

  login() {
    this._httpClientService.login(this.empleado).subscribe(
      (response: any) => {
        if (response.empleado) {
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
            response.empleado.saldoPensiones,
            response.empleado.afiliacionCesantias,
            response.empleado.saldoCesantias,
            response.empleado.role
          );

          localStorage.setItem("sesion", JSON.stringify(empleadoLogueado));
          this._compartidoService.emitirLogueo(true);
          this._router.navigate(["/perfil-empleado"]);
        } else {
          this.loginCorrecto =
            "Los datos ingresados son incorrectos. Pruebe nuevamente.";
        }
      },
      error => {
        if (error != null) {
          console.log(error);
        }
      }
    );
  }

  /*loginEmpresa() {
    this._empresaService.login(this.empresa).subscribe(
      (response: any) => {
        if (response.empresa) {
          let empresaLogueada = new Empresa(
            response.empresa._id,
            response.empresa.razonSocial,
            response.empresa.nit,
            response.empresa.password,
            response.empleado.role
          );

          localStorage.setItem("sesion", JSON.stringify(empresaLogueada));
          this._compartidoService.emitirLogueo(true);
          this._router.navigate(["/perfil-empresa"]);
        } else {
          this.loginCorrecto =
            "Los datos ingresados son incorrectos. Pruebe nuevamente.";
        }
      },
      error => {
        if (error != null) {
          console.log(error);
        }
      }
    );
  }*/
}
