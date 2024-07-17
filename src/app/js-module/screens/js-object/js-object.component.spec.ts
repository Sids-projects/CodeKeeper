import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsObjectComponent } from './js-object.component';

describe('JsObjectComponent', () => {
  let component: JsObjectComponent;
  let fixture: ComponentFixture<JsObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsObjectComponent]
    });
    fixture = TestBed.createComponent(JsObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
