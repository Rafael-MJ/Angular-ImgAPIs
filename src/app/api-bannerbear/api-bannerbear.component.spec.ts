import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBannerbearComponent } from './api-bannerbear.component';

describe('ApiBannerbearComponent', () => {
  let component: ApiBannerbearComponent;
  let fixture: ComponentFixture<ApiBannerbearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiBannerbearComponent]
    });
    fixture = TestBed.createComponent(ApiBannerbearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
