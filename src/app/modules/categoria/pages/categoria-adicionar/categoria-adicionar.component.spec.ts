import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaAdicionarComponent } from './categoria-adicionar.component';

describe('CategoriaAdicionarComponent', () => {
  let component: CategoriaAdicionarComponent;
  let fixture: ComponentFixture<CategoriaAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaAdicionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
