import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LproyectosComponent } from './lproyectos.component';

describe('LproyectosComponent', () => {
  let component: LproyectosComponent;
  let fixture: ComponentFixture<LproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
