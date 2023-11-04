import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-unidade-alterar',
  templateUrl: './unidade-alterar.component.html',
  styleUrls: ['./unidade-alterar.component.css']
})

export class UnidadeAlterarComponent implements OnInit {
  faTimes = faTimes;

  private unidades: any = [];
  unidade: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.unidades.push({ id: 1, nome: "un" });
    this.unidades.push({ id: 2, nome: "kg" });
    this.unidades.push({ id: 3, nome: "l" });
    this.unidades.push({ id: 4, nome: "pacote" });
    this.unidades.push({ id: 5, nome: "dz" });

    var id = this.route.snapshot.paramMap.get("id");
  }
}