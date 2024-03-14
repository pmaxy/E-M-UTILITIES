import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTimeComponent } from './form-time.component';

describe('FormTimeComponent', () => {
  let component: FormTimeComponent;
  let fixture: ComponentFixture<FormTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTimeComponent]
    });
    fixture = TestBed.createComponent(FormTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
