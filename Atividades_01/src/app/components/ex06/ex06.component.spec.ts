import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex06Component } from './ex06.component';

describe('Ex06Component', () => {
  let component: Ex06Component;
  let fixture: ComponentFixture<Ex06Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex06Component]
    });
    fixture = TestBed.createComponent(Ex06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
