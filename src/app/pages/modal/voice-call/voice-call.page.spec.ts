import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceCallPage } from './voice-call.page';

describe('VoiceCallPage', () => {
  let component: VoiceCallPage;
  let fixture: ComponentFixture<VoiceCallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceCallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
