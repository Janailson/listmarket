import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlterarComponent } from './lista-alterar.component';

describe('ListaAlterarComponent', () => {
  let component: ListaAlterarComponent;
  let fixture: ComponentFixture<ListaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlterarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
