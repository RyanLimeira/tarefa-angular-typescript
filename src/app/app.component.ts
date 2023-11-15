// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Adicione esta linha

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    CalculadoraComponent,
    CadastroAlunoComponent,
    ApoliceSeguroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicione esta linha
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export { AppComponent };

