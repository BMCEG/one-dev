import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {LandingBeitComponent } from './landing.component';

describe('LandingBeitComponent', () => {
  let component: LandingBeitComponent;
  let fixture: ComponentFixture<LandingBeitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingBeitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
