import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexperienciaComponent } from './lexperiencia.component';

describe('LexperienciaComponent', () => {
  let component: LexperienciaComponent;
  let fixture: ComponentFixture<LexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
