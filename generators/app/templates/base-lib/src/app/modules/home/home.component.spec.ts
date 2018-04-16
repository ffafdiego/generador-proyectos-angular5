import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= capModule %>Component } from './<%= module %>.component';

describe('<%= capModule %>Component', () => {
  let component: <%= capModule %>Component;
  let fixture: ComponentFixture<<%= capModule %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ <%= capModule %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= capModule %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
