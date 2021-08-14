import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhighchartsComponent } from './myhighcharts.component';

describe('MyhighchartsComponent', () => {
  let component: MyhighchartsComponent;
  let fixture: ComponentFixture<MyhighchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhighchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
