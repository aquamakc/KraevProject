import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateInputDirectiveComponent } from './generate-input-directive.component';

describe('GenerateInputDirectiveComponent', () => {
  let component: GenerateInputDirectiveComponent;
  let fixture: ComponentFixture<GenerateInputDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateInputDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateInputDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
