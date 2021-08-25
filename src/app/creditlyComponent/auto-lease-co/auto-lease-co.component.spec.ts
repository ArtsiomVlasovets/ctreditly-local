import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLeaseCoComponent } from './auto-lease-co.component';

describe('AutoLeaseCoComponent', () => {
  let component: AutoLeaseCoComponent;
  let fixture: ComponentFixture<AutoLeaseCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoLeaseCoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoLeaseCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
