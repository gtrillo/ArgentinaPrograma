import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LredesSocialesComponent } from './lredes-sociales.component';

describe('LredesSocialesComponent', () => {
  let component: LredesSocialesComponent;
  let fixture: ComponentFixture<LredesSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LredesSocialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LredesSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
