import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeAdicionarComponent } from './unidade-adicionar.component';

describe('UnidadeAdicionarComponent', () => {
  let component: UnidadeAdicionarComponent;
  let fixture: ComponentFixture<UnidadeAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadeAdicionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadeAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
