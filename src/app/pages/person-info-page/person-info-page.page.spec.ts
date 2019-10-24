import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoPagePage } from './person-info-page.page';

describe('PersonInfoPagePage', () => {
  let component: PersonInfoPagePage;
  let fixture: ComponentFixture<PersonInfoPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInfoPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInfoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
