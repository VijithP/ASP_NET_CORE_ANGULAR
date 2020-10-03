import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcustomerComponent } from './showcustomer.component';

describe('ShowcustomerComponent', () => {
  let component: ShowcustomerComponent;
  let fixture: ComponentFixture<ShowcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
