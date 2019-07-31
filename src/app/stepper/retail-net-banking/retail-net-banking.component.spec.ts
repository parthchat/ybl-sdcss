import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailNetBankingComponent } from './retail-net-banking.component';

describe('RetailNetBankingComponent', () => {
  let component: RetailNetBankingComponent;
  let fixture: ComponentFixture<RetailNetBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailNetBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailNetBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
