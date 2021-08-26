import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSectionComponent } from './animation-section.component';

describe('AnimationSectionComponent', () => {
  let component: AnimationSectionComponent;
  let fixture: ComponentFixture<AnimationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
