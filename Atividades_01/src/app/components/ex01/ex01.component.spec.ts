import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex01Component } from './ex01.component';

describe('Ex01Component', () => {
  let component: Ex01Component;
  let fixture: ComponentFixture<Ex01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex01Component]
    });
    fixture = TestBed.createComponent(Ex01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
