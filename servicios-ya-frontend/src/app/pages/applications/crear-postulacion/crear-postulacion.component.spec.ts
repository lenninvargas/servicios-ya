import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPostulacionComponent } from './crear-postulacion.component';

describe('CrearPostulacionComponent', () => {
  let component: CrearPostulacionComponent;
  let fixture: ComponentFixture<CrearPostulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearPostulacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPostulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
