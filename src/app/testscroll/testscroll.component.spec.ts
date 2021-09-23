import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscrollComponent } from './testscroll.component';

describe('TestscrollComponent', () => {
  let component: TestscrollComponent;
  let fixture: ComponentFixture<TestscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestscrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
