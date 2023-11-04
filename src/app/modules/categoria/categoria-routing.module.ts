import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CategoriaAdicionarComponent } from './pages/categoria-adicionar/categoria-adicionar.component';
import { CategoriaAlterarComponent } from './pages/categoria-alterar/categoria-alterar.component';

const routes: Routes = [
  { path: "", component: CategoriasComponent },
  { path: "adicionar", component: CategoriaAdicionarComponent },
  { path: "alterar", component: CategoriaAlterarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoriaRoutingModule { }