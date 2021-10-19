import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbcGradingPage } from './cbcgrading.page';

describe('CbcGradingPage', () => {
  let component: CbcGradingPage;
  let fixture: ComponentFixture<CbcGradingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbcGradingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbcGradingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
