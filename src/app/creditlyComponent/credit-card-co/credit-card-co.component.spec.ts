import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardCoComponent } from './credit-card-co.component';

describe('CreditCardCoComponent', () => {
  let component: CreditCardCoComponent;
  let fixture: ComponentFixture<CreditCardCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardCoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
