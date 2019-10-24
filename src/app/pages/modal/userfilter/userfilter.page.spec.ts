import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfilterPage } from './userfilter.page';

describe('UserfilterPage', () => {
  let component: UserfilterPage;
  let fixture: ComponentFixture<UserfilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
