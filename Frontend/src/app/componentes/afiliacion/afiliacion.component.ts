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

  constructor(private _httpClientService: HttpClientService) {
    this.persona = new Persona("",null,null,"");
  }

  ngOnInit() {

  }

  afiliar() {
    this._httpClientService.afiliar(this.persona).subscribe(
      (response: any) => {
        if (response.persona) {
          console.log(this.persona);
          this.afiliacionCorrecta =
            "Afiliación correcta, nos estaremos comunicando " 
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
