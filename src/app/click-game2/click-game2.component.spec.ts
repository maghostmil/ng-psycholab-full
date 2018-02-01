import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickGame2Component } from './click-game2.component';

describe('ClickGame2Component', () => {
  let component: ClickGame2Component;
  let fixture: ComponentFixture<ClickGame2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickGame2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
