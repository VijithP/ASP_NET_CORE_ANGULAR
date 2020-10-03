import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomerComponent } from './newcustomer.component';

describe('NewcustomerComponent', () => {
  let component: NewcustomerComponent;
  let fixture: ComponentFixture<NewcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
