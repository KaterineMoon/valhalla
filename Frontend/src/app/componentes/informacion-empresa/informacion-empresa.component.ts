import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/modelos/empresa';
import { ServicioEmpresaService } from '../../servicios/servicio-empresa.service';


@Component({
  selector: 'app-informacion-empresa',
  templateUrl: './informacion-empresa.component.html',
  styleUrls: ['./informacion-empresa.component.css']
})
export class InformacionEmpresaComponent implements OnInit {
  empresa : Empresa;
  actualizacionCorrecta;
  url = "http://localhost:3977/api/";
  constructor(
    private _ServicioEmpresaService: ServicioEmpresaService
  ) { }

  ngOnInit() {
    this.empresa = JSON.parse(localStorage.getItem("sesionEmpresa"))
    console.log(this.empresa)
  }
  actualizar(){
    this._ServicioEmpresaService.actualizar(this.empresa._id, this.empresa).subscribe(
      (response : any ) => {
        if(response.empresa){
          this.actualizacionCorrecta = "Datos actualizados correctamente";
          this.empresa = response.empresa;
          localStorage.setItem("sesionEmpresa", JSON.stringify(this.empresa));
        }else{
          this.actualizacionCorrecta = "Los datos no se actualizaron, por favor inténtalo de nuevo";
        }
      }, error => {
        if(error != null){
          console.log(error)
        }
      }
    )
  }


}
