import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTemplateioComponent } from './api-templateio.component';

describe('ApiTemplateioComponent', () => {
  let component: ApiTemplateioComponent;
  let fixture: ComponentFixture<ApiTemplateioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiTemplateioComponent]
    });
    fixture = TestBed.createComponent(ApiTemplateioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
