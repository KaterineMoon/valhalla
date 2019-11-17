import { Component, OnInit } from '@angular/core';
 import * as pdfMake from 'pdfmake/build/pdfmake';
 import * as pdfFonts from 'pdfmake/build/vfs_fonts';
 import { Empleado } from 'src/app/modelos/empleado';
 import { HttpClientService } from '../../servicios/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './pdf-certificado.component.html'
})
export class PdfCertificadoComponent implements OnInit {
  title = 'app works!';
  persona : Empleado;


constructor(
  private _httpClientServices: HttpClientService
){
     //called first time before the ngOnInit()
     pdfMake.vfs = pdfFonts.pdfMake.vfs;
     
      var dd = {
        content: [
          "  ",
          "  ",
          "VALHALLA",
          "  ",
          "  ",
          "Bogotá, Colombia",
           "  ",
           "  ",
           "  ",
           "  ",

          "A QUIEN CORRESPONDA",
          "  ",
          "  ",
          "  ",
          "el señor PEPITO PEREZ con cédula de ciudadania número 123456789 de Bogotá figura como afiliado a la sociedad administradora de pensiones y cesantias Valhalla desde el 22 de febrero de 2017 y su estado es activo.",
          " ",
          " Se expide el siguiente certificado a solicitud del afiliado el día 18 de noviembre de 2019.",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ", 
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ", 
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          " ", 
          " ",
          " ",
          " ",
          " ",
          " ",
          " ",
          "Valhalla.SA Pensiones y Cesantias. Sociedad administradora de Pensiones y Cesantias. Línea de servicio: Bogotá 744 44 64 / Medellín y Cali 510 90 99, Barranquilla 319 79 99 / Cartagena 642 49 99, Resto del país desde una línea fija al 01 8000 52 8000. Escribenos a travez del chat de nuestro portal web",
          
        ]
      };
    pdfMake.createPdf(dd).download();
  }
  ngOnInit() {
    this.persona = JSON.parse(localStorage.getItem("sesion"))
  }

  obtener(){
    this._httpClientServices.obtener(this.persona._id).subscribe(
      (response: any) => {
        console.log(response)
      }, err =>{
        console.log(err)
      }
    )
  }
}