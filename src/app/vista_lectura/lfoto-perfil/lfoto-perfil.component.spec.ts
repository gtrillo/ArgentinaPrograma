import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfotoPerfilComponent } from './lfoto-perfil.component';

describe('LfotoPerfilComponent', () => {
  let component: LfotoPerfilComponent;
  let fixture: ComponentFixture<LfotoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LfotoPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LfotoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
