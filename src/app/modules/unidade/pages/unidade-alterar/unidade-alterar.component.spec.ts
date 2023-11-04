import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeAlterarComponent } from './unidade-alterar.component';

describe('UnidadeAlterarComponent', () => {
  let component: UnidadeAlterarComponent;
  let fixture: ComponentFixture<UnidadeAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeAlterarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadeAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
