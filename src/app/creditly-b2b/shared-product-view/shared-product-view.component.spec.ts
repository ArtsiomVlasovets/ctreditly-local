import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedProductViewComponent } from './shared-product-view.component';

describe('SharedProductViewComponent', () => {
  let component: SharedProductViewComponent;
  let fixture: ComponentFixture<SharedProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedProductViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
