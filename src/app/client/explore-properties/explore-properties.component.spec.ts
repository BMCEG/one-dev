import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePropertiesComponent } from './explore-properties.component';

describe('ExplorePropertiesComponent', () => {
  let component: ExplorePropertiesComponent;
  let fixture: ComponentFixture<ExplorePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
