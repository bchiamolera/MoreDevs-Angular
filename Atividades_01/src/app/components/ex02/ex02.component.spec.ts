import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex02Component } from './ex02.component';

describe('Ex02Component', () => {
  let component: Ex02Component;
  let fixture: ComponentFixture<Ex02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex02Component]
    });
    fixture = TestBed.createComponent(Ex02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
