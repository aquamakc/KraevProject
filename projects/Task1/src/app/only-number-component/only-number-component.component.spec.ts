import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyNumberComponentComponent } from './only-number-component.component';

describe('OnlyNumberComponentComponent', () => {
  let component: OnlyNumberComponentComponent;
  let fixture: ComponentFixture<OnlyNumberComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyNumberComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyNumberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
