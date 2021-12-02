import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Landing138Component } from './landing.component';

describe('Landing138Component', () => {
  let component: Landing138Component;
  let fixture: ComponentFixture<Landing138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landing138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landing138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
