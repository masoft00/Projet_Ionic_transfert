import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailretraitPage } from './detailretrait.page';

describe('DetailretraitPage', () => {
  let component: DetailretraitPage;
  let fixture: ComponentFixture<DetailretraitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailretraitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailretraitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
