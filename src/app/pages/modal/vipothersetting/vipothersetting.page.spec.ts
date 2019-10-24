import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipothersettingPage } from './vipothersetting.page';

describe('VipothersettingPage', () => {
  let component: VipothersettingPage;
  let fixture: ComponentFixture<VipothersettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipothersettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipothersettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
