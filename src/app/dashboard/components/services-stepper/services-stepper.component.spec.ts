import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesStepperComponent } from './services-stepper.component';

describe('ServicesStepperComponent', () => {
  let component: ServicesStepperComponent;
  let fixture: ComponentFixture<ServicesStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
