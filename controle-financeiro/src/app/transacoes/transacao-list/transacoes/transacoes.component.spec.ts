import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacoesComponent } from './transacoes.component';

describe('TransacoesComponent', () => {
  let component: TransacoesComponent;
  let fixture: ComponentFixture<TransacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
