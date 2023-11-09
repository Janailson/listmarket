import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';

import { UnidadeRoutingModule } from './unidade-routing.module';
import { UnidadesComponent } from './pages/unidades/unidades.component';
import { UnidadeAdicionarComponent } from './pages/unidade-adicionar/unidade-adicionar.component';
import { UnidadeAlterarComponent } from './pages/unidade-alterar/unidade-alterar.component';


@NgModule({
  declarations: [
    UnidadesComponent,
    UnidadeAdicionarComponent,
    UnidadeAlterarComponent
  ],
  imports: [
    CommonModule,
    UnidadeRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})

export class UnidadeModule { }