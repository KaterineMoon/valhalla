import { Component, OnInit } from '@angular/core';
import { AfiliadoService } from '../../servicios/afiliado.service';
import { Persona } from 'src/app/modelos/nuevaPersona';

@Component({
  selector: 'app-afiliacion',
  templateUrl: './afiliacion.component.html',
  styleUrls: ['./afiliacion.component.css']
})
export class AfiliacionComponent implements OnInit {
  persona : Persona;
  afiliacionCorrecta;

  constructor(private _afiliadoService: AfiliadoService) {}

  ngOnInit() {
  }

  afiliar() {
    this._afiliadoService.afiliar(this.persona).subscribe(
      (response: any) => {
        if (response.persona) {
          this.afiliacionCorrecta =
            "Se ha recibido tu solicitud correctamente, uno de nuestros agentes te contactará para completar el proceso" 
        } else {
          this.afiliacionCorrecta =
            "El registro no se ha podido realizar. Inténtelo de nuevo ";
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
