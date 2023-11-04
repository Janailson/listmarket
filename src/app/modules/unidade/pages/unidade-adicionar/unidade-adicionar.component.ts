import { Component } from '@angular/core';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-unidade-adicionar',
  templateUrl: './unidade-adicionar.component.html',
  styleUrls: ['./unidade-adicionar.component.css']
})

export class UnidadeAdicionarComponent {
  faTimes = faTimes;
  faSave = faSave;
}