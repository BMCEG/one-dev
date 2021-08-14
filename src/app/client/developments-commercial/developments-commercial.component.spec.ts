import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentsCommercialComponent } from './developments-commercial.component';

describe('DevelopmentsCommercialComponent', () => {
  let component: DevelopmentsCommercialComponent;
  let fixture: ComponentFixture<DevelopmentsCommercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentsCommercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentsCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
