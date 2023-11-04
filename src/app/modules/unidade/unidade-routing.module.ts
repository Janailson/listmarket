import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadesComponent } from './pages/unidades/unidades.component';
import { UnidadeAdicionarComponent } from './pages/unidade-adicionar/unidade-adicionar.component';
import { UnidadeAlterarComponent } from './pages/unidade-alterar/unidade-alterar.component';

const routes: Routes = [
  { path: "", component: UnidadesComponent },
  { path: "adicionar", component: UnidadeAdicionarComponent },
  { path: "alterar/:id", component: UnidadeAlterarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UnidadeRoutingModule { }