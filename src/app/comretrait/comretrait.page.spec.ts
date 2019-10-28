import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComretraitPage } from './comretrait.page';

describe('ComretraitPage', () => {
  let component: ComretraitPage;
  let fixture: ComponentFixture<ComretraitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComretraitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComretraitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
