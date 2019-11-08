import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario'
import { UsuarioService} from '../../services/usuario.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-afiliacion',
  templateUrl: './afiliacion.component.html',
  styleUrls: ['./afiliacion.component.scss'],
  providers:[]
})
export class AfiliacionComponent implements OnInit {
  usuario : Usuario;
  afiliacionCorrecta;

  constructor(
    private _usuarioService : UsuarioService,
    private _router : Router
  ) {
    this.usuario = new Usuario('', '', null, '', '');
   }

  ngOnInit() {
  }

  afiliar(){
    this._usuarioService.afiliar(this.usuario).subscribe(
      (response : any) => {
        if (response.usuario){
          this.afiliacionCorrecta = "La afiliación fue correcta, pronto nos comunicaremos contigo"
        } else{
          this.afiliacionCorrecta = "No se ha realizado la afiliación, por favor intenta de nuevo"
        }
      }, error => {
        if (error != null){
          console.log(error)
        }
      }
    )
  }
}
