import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutoAdicionarComponent } from './pages/produto-adicionar/produto-adicionar.component';
import { ProdutoAlterarComponent } from './pages/produto-alterar/produto-alterar.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoAdicionarComponent,
    ProdutoAlterarComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})

export class ProdutoModule { }