import { Component, OnInit, NgModule } from '@angular/core';
import { Empleado } from 'src/app/modelos/empleado';
import { HttpClientService } from '../../servicios/http-client.service';

@Component({
  selector: 'app-informacion-empleado',
  templateUrl: './informacion-empleado.component.html',
  styleUrls: ['./informacion-empleado.component.css']
})
export class InformacionEmpleadoComponent implements OnInit {
  persona : Empleado;
  actualizacionCorrecta;
  url = "http://localhost:3977/api/";

  constructor(
    private _httpClientService: HttpClientService
  ) { }  

  ngOnInit() {
    this.persona = JSON.parse(localStorage.getItem("sesion"))
    console.log(this.persona)
  }


  // obtener(){
  //   this._httpClientService.afiliar
    
    
  //   (this.persona).subscribe(
  //     (response: any) => {
  //       console.log(response)
        
  //     }, err => {
  //       console.log(err)
  //     }
  //   )
  // }
 
}
