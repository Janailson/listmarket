import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons'
import { Unidade } from 'src/app/domain/models/unidade';
import { UnidadeService } from 'src/app/services/unidade.service';

@Component({
  selector: 'app-unidade-alterar',
  templateUrl: './unidade-alterar.component.html',
  styleUrls: ['./unidade-alterar.component.css']
})

export class UnidadeAlterarComponent implements OnInit {
  faTimes = faTimes;
  faSave = faSave;

  unidade: any;

  constructor(private route: ActivatedRoute, private _service: UnidadeService) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params["id"];
    this.getUnidade(id);
  }

  getUnidade(id: number) {
    this._service.getById(id).subscribe((data: Unidade) => {
      this.unidade = data;
    })
  }
}