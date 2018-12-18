import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternItemComponent } from './pattern-item.component';

describe('PatternItemComponent', () => {
  let component: PatternItemComponent;
  let fixture: ComponentFixture<PatternItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
