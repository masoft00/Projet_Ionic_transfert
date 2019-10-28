import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailenvoiPage } from './detailenvoi.page';

describe('DetailenvoiPage', () => {
  let component: DetailenvoiPage;
  let fixture: ComponentFixture<DetailenvoiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailenvoiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailenvoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
