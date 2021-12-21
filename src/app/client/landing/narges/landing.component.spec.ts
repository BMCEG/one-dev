import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {LandingNargesComponent } from './landing.component';

describe('LandingNargesComponent', () => {
  let component: LandingNargesComponent;
  let fixture: ComponentFixture<LandingNargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingNargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
