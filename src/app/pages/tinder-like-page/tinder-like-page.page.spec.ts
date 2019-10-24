import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinderLikePagePage } from './tinder-like-page.page';

describe('TinderLikePagePage', () => {
  let component: TinderLikePagePage;
  let fixture: ComponentFixture<TinderLikePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinderLikePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinderLikePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
