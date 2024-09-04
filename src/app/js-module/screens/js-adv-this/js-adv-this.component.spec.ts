import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsAdvThisComponent } from './js-adv-this.component';

describe('JsAdvThisComponent', () => {
  let component: JsAdvThisComponent;
  let fixture: ComponentFixture<JsAdvThisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsAdvThisComponent]
    });
    fixture = TestBed.createComponent(JsAdvThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
