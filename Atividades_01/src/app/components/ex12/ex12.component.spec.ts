import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex12Component } from './ex12.component';

describe('Ex12Component', () => {
  let component: Ex12Component;
  let fixture: ComponentFixture<Ex12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex12Component]
    });
    fixture = TestBed.createComponent(Ex12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
