import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapplicationsComponent } from './listapplications.component';

describe('ListapplicationsComponent', () => {
  let component: ListapplicationsComponent;
  let fixture: ComponentFixture<ListapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListapplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
