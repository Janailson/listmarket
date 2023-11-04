import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdicionarComponent } from './lista-adicionar.component';

describe('ListaAdicionarComponent', () => {
  let component: ListaAdicionarComponent;
  let fixture: ComponentFixture<ListaAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAdicionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
