import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LbannerComponent } from './lbanner.component';

describe('LbannerComponent', () => {
  let component: LbannerComponent;
  let fixture: ComponentFixture<LbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
