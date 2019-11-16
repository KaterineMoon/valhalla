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
          "Noviembre 18 de 2019",
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

                [ 'First', 'Second', 'Third', 'The last one' ],
                [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
                [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
              ]
            }
          }
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