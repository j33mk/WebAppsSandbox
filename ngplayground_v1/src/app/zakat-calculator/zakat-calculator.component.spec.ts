import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakatCalculatorComponent } from './zakat-calculator.component';

describe('ZakatCalculatorComponent', () => {
  let component: ZakatCalculatorComponent;
  let fixture: ComponentFixture<ZakatCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakatCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakatCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
