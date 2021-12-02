import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {LandingD124Component } from './landing.component';

describe('LandingD124Component', () => {
  let component: LandingD124Component;
  let fixture: ComponentFixture<LandingD124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingD124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingD124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
