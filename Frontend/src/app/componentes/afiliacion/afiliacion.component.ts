import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../servicios/http-client.service';
import { Persona } from 'src/app/modelos/nuevaPersona';

@Component({
  selector: 'app-afiliacion',
  templateUrl: './afiliacion.component.html',
  styleUrls: ['./afiliacion.component.css']
})
export class AfiliacionComponent implements OnInit {
  persona : Persona;
  afiliacionCorrecta;

  constructor(private _httpClientService: HttpClientService) {}

  ngOnInit() {
  }

  afiliar() {
    this._httpClientService.afiliar(this.persona).subscribe(
      (response: any) => {
        if (response.empleado) {
          this.afiliacionCorrecta =
            "Todavia no se " 
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
