import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10Component } from './ex10.component';

describe('Ex10Component', () => {
  let component: Ex10Component;
  let fixture: ComponentFixture<Ex10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex10Component]
    });
    fixture = TestBed.createComponent(Ex10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
