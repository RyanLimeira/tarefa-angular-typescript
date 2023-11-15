// calculadora.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  numero1!: number;
  numero2!: number;
  operacao!: string;
  resultado!: number;

  calcular() {
    switch (this.operacao) {
      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;
      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;
      case '*':
        this.resultado = this.numero1 * this.numero2;
        break;
      case '/':
        this.resultado = this.numero1 / this.numero2;
        break;
    }
  }
}