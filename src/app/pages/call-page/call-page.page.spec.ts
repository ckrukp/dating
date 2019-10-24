import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallPagePage } from './call-page.page';

describe('CallPagePage', () => {
  let component: CallPagePage;
  let fixture: ComponentFixture<CallPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
