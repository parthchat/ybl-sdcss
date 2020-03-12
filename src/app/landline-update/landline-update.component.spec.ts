import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlineUpdateComponent } from './landline-update.component';

describe('LandlineUpdateComponent', () => {
  let component: LandlineUpdateComponent;
  let fixture: ComponentFixture<LandlineUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlineUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
