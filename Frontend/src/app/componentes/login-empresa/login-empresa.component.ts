import { Component, OnInit } from '@angular/core';
import { Empresa } from "src/app/modelos/empresa";
import { HttpClientService } from "../../servicios/http-client.service";
import { ServicioEmpresaService } from "../../servicios/servicio-empresa.service";
import { ServicioCompartidoService } from "../../servicios/servicio-compartido.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.css']
})
export class LoginEmpresaComponent implements OnInit {
  empresa: Empresa;
  loginEmpresaCorrecto;

  constructor(
    private _router: Router,
    private _compartidoService: ServicioCompartidoService,
    private _empresaService: ServicioEmpresaService
  ) {
    if (localStorage.getItem("sesion") != null) {
      this._router.navigate(["/perfil-empresa"]);
    }
    this.empresa = new Empresa("", "", null, "", "");
  }

  ngOnInit() {
  }

  loginEmpresa() {
    this._empresaService.login(this.empresa).subscribe(
      (response: any) => {
        if (response.empresa) {
          let empresaLogueada = new Empresa(
            response.empresa._id,
            response.empresa.razonSocial,
            response.empresa.nit,
            response.empresa.password,
            response.empresa.role
          );

          localStorage.setItem("sesionEmpresa", JSON.stringify(empresaLogueada));
          this._compartidoService.emitirLogueoEmpresa(true);
          this._router.navigate(["/perfil-empresa"]);
        } else {
          this.loginEmpresaCorrecto =
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

}
