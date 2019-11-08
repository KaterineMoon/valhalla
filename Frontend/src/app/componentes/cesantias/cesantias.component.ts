import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

class Calculadora {
  fechaInicial: any;
  fechaFinal: any;
  salario: number;
  cesantias: number;
}
@Component({
  selector: 'app-cesantias',
  templateUrl: './cesantias.component.html',
  styleUrls: ['./cesantias.component.scss']
})
export class CesantiasComponent implements OnInit {

  public calculadora: Calculadora;

  constructor() { }

  ngOnInit() {
    this.calculadora = new Calculadora();
  }

  calcular(){
    const inicial = this.calculadora.fechaInicial;
    const final = this.calculadora.fechaFinal;

 
    let diffMs = (new Date(final.year, final.month, final.day).getTime() - new Date(inicial.year, inicial.month, inicial.day).getTime()); // milliseconds
    let diffDays = Math.floor(diffMs / 86400000);

    this.calculadora.cesantias = Math.floor((diffDays*this.calculadora.salario)/364)
  }



}
