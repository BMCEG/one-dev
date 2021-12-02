import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {LandingC273Component } from './landing.component';

describe('LandingC273Component', () => {
  let component: LandingC273Component;
  let fixture: ComponentFixture<LandingC273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingC273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingC273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
