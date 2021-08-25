import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCoComponent } from './personal-co.component';

describe('PersonalCoComponent', () => {
  let component: PersonalCoComponent;
  let fixture: ComponentFixture<PersonalCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalCoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
