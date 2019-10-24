import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipsettingPage } from './vipsetting.page';

describe('VipsettingPage', () => {
  let component: VipsettingPage;
  let fixture: ComponentFixture<VipsettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipsettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipsettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
