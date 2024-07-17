import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsLoopComponent } from './js-loop.component';

describe('JsLoopComponent', () => {
  let component: JsLoopComponent;
  let fixture: ComponentFixture<JsLoopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsLoopComponent]
    });
    fixture = TestBed.createComponent(JsLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
