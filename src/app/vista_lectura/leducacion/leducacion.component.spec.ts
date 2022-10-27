import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeducacionComponent } from './leducacion.component';

describe('LeducacionComponent', () => {
  let component: LeducacionComponent;
  let fixture: ComponentFixture<LeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
