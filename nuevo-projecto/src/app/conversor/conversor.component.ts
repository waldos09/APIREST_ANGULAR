import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  titulo = "Conversor de temperaturas"
  numeroUno: number = 0
  numeroDos: number = 0
  numeroTres: number = 0
  C_resultadoUno: number = 0
  C_resultadoDos: number = 0 
  F_resultadoUno: number = 0
  F_resultadoDos: number = 0 
  K_resultadoUno: number = 0
  K_resultadoDos: number = 0 

  //Grados Celcius
  farenheit() : void{
    this.C_resultadoUno = (this.numeroUno * 1.8) + 32
  }

  kelvin() : void{
    this.C_resultadoDos = this.numeroUno  + 273.15
  }

  //Grados Farenheit
  F_celcius() : void{
    this.F_resultadoUno = ((this.numeroDos - 32) * (5/9))
  }

  F_kelvin() : void{
    this.F_resultadoDos = ((this.numeroDos - 32) * (5/9)) + 273.15
  }

  //Grados Kelvin
  K_celcius() : void{
    this.K_resultadoUno = this.numeroTres -  273.15
  }

  K_farenheit() : void{
    this.K_resultadoDos = ((this.numeroTres - 273.15) * (9/5)) + 32 
  }
}
