import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyEmailComponentComponent } from './only-email-component.component';

describe('OnlyEmailComponentComponent', () => {
  let component: OnlyEmailComponentComponent;
  let fixture: ComponentFixture<OnlyEmailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyEmailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyEmailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
