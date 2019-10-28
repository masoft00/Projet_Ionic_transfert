import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComenvoiPage } from './comenvoi.page';

describe('ComenvoiPage', () => {
  let component: ComenvoiPage;
  let fixture: ComponentFixture<ComenvoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComenvoiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComenvoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
