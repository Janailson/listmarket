import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListasComponent } from './pages/listas/listas.component';
import { ListaAdicionarComponent } from './pages/lista-adicionar/lista-adicionar.component';
import { ListaAlterarComponent } from './pages/lista-alterar/lista-alterar.component';


@NgModule({
  declarations: [
    ListasComponent,
    ListaAdicionarComponent,
    ListaAlterarComponent
  ],
  imports: [
    CommonModule,
    ListaRoutingModule
  ]
})

export class ListaModule { }