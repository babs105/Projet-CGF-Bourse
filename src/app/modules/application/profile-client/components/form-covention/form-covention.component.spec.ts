import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCoventionComponent } from './form-covention.component';

describe('FormCoventionComponent', () => {
  let component: FormCoventionComponent;
  let fixture: ComponentFixture<FormCoventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCoventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCoventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
