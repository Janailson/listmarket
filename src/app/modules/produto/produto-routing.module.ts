import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutoAdicionarComponent } from './pages/produto-adicionar/produto-adicionar.component';
import { ProdutoAlterarComponent } from './pages/produto-alterar/produto-alterar.component';

const routes: Routes = [
  { path: "", component: ProdutosComponent },
  { path: "adicionar", component: ProdutoAdicionarComponent },
  { path: "alterar", component: ProdutoAlterarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProdutoRoutingModule { }