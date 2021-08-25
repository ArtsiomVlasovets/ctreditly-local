import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuoLeaseImageComponent } from './auo-lease-image.component';

describe('AuoLeaseImageComponent', () => {
  let component: AuoLeaseImageComponent;
  let fixture: ComponentFixture<AuoLeaseImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuoLeaseImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuoLeaseImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
