import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaAlterarComponent } from './categoria-alterar.component';

describe('CategoriaAlterarComponent', () => {
  let component: CategoriaAlterarComponent;
  let fixture: ComponentFixture<CategoriaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaAlterarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
