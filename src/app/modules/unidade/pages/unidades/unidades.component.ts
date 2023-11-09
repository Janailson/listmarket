import { Component, OnInit } from '@angular/core';

import { faPlus, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import { Unidade } from 'src/app/domain/models/unidade';
import { UnidadeService } from 'src/app/services/unidade.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})

export class UnidadesComponent implements OnInit {
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
  faAngleRight = faAngleRight;

  deleteButton: boolean = false;

  unidades: Unidade[] = [];
  all_selected_values: number[] = [];

  constructor(private _service: UnidadeService) { }

  ngOnInit(): void {
    this.getUnidades();
  }

  getUnidades() {
    this._service.getAll().subscribe((data: Unidade[]) => {
      this.unidades = data;
    })
  }

  onChange(unidade: any): void {
    if (this.all_selected_values.includes(unidade.id)) {
      this.all_selected_values = this.all_selected_values.filter((item) => item !== unidade.id);
    }
    else {
      this.all_selected_values.push(unidade.id);
    }
    this.deleteButton = this.all_selected_values.length > 0;
  }
}