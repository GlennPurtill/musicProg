import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BassComponentComponent } from './bass-component.component';

describe('BassComponentComponent', () => {
  let component: BassComponentComponent;
  let fixture: ComponentFixture<BassComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BassComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
