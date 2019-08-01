import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mahmodmahmod2019Component } from './mahmodmahmod2019.component';

describe('Mahmodmahmod2019Component', () => {
  let component: Mahmodmahmod2019Component;
  let fixture: ComponentFixture<Mahmodmahmod2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mahmodmahmod2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mahmodmahmod2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
