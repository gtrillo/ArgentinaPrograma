import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArpComponent } from './logo-arp.component';

describe('LogoArpComponent', () => {
  let component: LogoArpComponent;
  let fixture: ComponentFixture<LogoArpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoArpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
