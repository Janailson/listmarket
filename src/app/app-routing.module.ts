import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "listas",
    loadChildren: () => import("@modules/lista/lista.module").then(m => m.ListaModule)
  },
  {
    path: "produtos",
    loadChildren: () => import("@modules/produto/produto.module").then(m => m.ProdutoModule)
  },
  {
    path: "categorias",
    loadChildren: () => import("@modules/categoria/categoria.module").then(m => m.CategoriaModule)
  },
  {
    path: "unidades-medida",
    loadChildren: () => import("@modules/unidade/unidade.module").then(m => m.UnidadeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }