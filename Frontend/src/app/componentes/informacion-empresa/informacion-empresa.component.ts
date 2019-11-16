import { Empresa } from './../../modelos/empresa';
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../servicios/http-client.service';

@Component({
  selector: 'app-informacion-empresa',
  templateUrl: './informacion-empresa.component.html',
  styleUrls: ['./informacion-empresa.component.css']
})
export class InformacionEmpresaComponent implements OnInit {
  empresa : Empresa;
  url = "http://localhost:3977/api/";

  constructor(
    private _httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.empresa = JSON.parse(localStorage.getItem("sesion"))
    console.log(this.empresa)
  }

}
