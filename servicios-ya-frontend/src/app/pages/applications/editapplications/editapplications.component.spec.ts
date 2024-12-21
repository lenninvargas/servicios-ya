import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditapplicationsComponent } from './editapplications.component';

describe('EditapplicationsComponent', () => {
  let component: EditapplicationsComponent;
  let fixture: ComponentFixture<EditapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditapplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
