import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {LandingSuccess } from './landing.component';

describe('LandingSuccess', () => {
  let component: LandingSuccess;
  let fixture: ComponentFixture<LandingSuccess>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSuccess ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSuccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
