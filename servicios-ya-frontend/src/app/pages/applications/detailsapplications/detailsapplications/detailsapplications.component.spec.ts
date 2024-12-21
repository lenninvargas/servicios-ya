import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsapplicationsComponent } from './detailsapplications.component';

describe('DetailsapplicationsComponent', () => {
  let component: DetailsapplicationsComponent;
  let fixture: ComponentFixture<DetailsapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsapplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
