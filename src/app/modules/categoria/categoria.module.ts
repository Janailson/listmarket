import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CategoriaAdicionarComponent } from './pages/categoria-adicionar/categoria-adicionar.component';
import { CategoriaAlterarComponent } from './pages/categoria-alterar/categoria-alterar.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    CategoriaAdicionarComponent,
    CategoriaAlterarComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }
