import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFunctionsComponent } from './js-functions.component';

describe('JsFunctionsComponent', () => {
  let component: JsFunctionsComponent;
  let fixture: ComponentFixture<JsFunctionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsFunctionsComponent]
    });
    fixture = TestBed.createComponent(JsFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
