import { Component, OnInit } from '@angular/core';
 import * as pdfMake from 'pdfmake/build/pdfmake';
 import * as pdfFonts from 'pdfmake/build/vfs_fonts';
 import { Empleado } from 'src/app/modelos/empleado';
 import { HttpClientService } from '../../servicios/http-client.service';
import { Title } from '@angular/platform-browser';
import { templateSourceUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './pdf-cesantias-pensiones.component.html'
})
export class PdfCesantiasPensionesComponent implements OnInit {
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
          "Noviembre 18 de 2019",
          "Bogotá, Colombia",
           "  ",
           "  ",
          "Pepito Perez",
          "CC 12345678",
          "  ",
          "  ",
          "Los siguientes datos son la relación de su cuenta de aportes realizados y consolidado de ahorro hasta el día de hoy.",
          "  ",
          "  ",
          "  ",
          //this.persona.nombre,
          // "A continuación " , 
          {
            layout: 'lightHorizontalLines', // optional
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 1,
              widths: [ '*', 'auto', 100, '*' ],
              body: [
                [ 'Fondo de Pensiones', 'Saldo ahorro   ', 'Fondo de Cesantias   ', 'Saldo Ahorro   '],
                [ 'Porvenir', '$21.000.000', 'Porvenir', '$8.000.000' ]
              ]
            }
          },              
          "  ",
          "  ",
          "  ",
          "  ",
          "Rentabilidad del fondo",
          "9.6%",
          "  ",
          "  ",
          "Este valor será calculado, una vez tu cuenta de ahorro individual cumpla la misma antigüedad utilizada para el cálculo de la rentabilidad del Fondo donde se encuentran tus recursos",
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