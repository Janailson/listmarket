import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListasComponent } from './pages/listas/listas.component';
import { ListaAdicionarComponent } from './pages/lista-adicionar/lista-adicionar.component';
import { ListaAlterarComponent } from './pages/lista-alterar/lista-alterar.component';

const routes: Routes = [
  { path: "", component: ListasComponent },
  { path: "adicionar", component: ListaAdicionarComponent },
  { path: "alterar", component: ListaAlterarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListaRoutingModule { }