import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAdicionarComponent } from './produto-adicionar.component';

describe('ProdutoAdicionarComponent', () => {
  let component: ProdutoAdicionarComponent;
  let fixture: ComponentFixture<ProdutoAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoAdicionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
