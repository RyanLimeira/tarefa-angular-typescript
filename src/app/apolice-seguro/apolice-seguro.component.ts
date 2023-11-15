// apolice-seguro.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})

export class ApoliceSeguroComponent {
  nomeSegurado!: string;
  sexo!: string;
  idade!: number;
  valorAutomovel!: number;
  valorApolice!: number;

  calcularApolice() {
    if (this.sexo === 'masculino') {
      this.valorApolice = this.idade <= 25 ? 0.15 * this.valorAutomovel : 0.10 * this.valorAutomovel;
    } else {
      this.valorApolice = 0.08 * this.valorAutomovel;
    }
  }
}
