import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex11Component } from './ex11.component';

describe('Ex11Component', () => {
  let component: Ex11Component;
  let fixture: ComponentFixture<Ex11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex11Component]
    });
    fixture = TestBed.createComponent(Ex11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
