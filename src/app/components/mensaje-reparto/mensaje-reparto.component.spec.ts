import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeRepartoComponent } from './mensaje-reparto.component';

describe('MensajeRepartoComponent', () => {
  let component: MensajeRepartoComponent;
  let fixture: ComponentFixture<MensajeRepartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajeRepartoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensajeRepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
