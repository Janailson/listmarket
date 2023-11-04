import { Component, OnInit } from '@angular/core';
import { faPlus, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Unidade } from 'src/app/domain/models/unidade';

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

  unidades: any = [];
  all_selected_values: number[] = [];

  ngOnInit(): void {
    this.unidades.push({ id: 1, nome: "un" });
    this.unidades.push({ id: 2, nome: "kg" });
    this.unidades.push({ id: 3, nome: "l" });
    this.unidades.push({ id: 4, nome: "pacote" });
    this.unidades.push({ id: 5, nome: "dz" });
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