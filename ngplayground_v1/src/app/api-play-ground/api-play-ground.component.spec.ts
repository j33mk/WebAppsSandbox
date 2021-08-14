import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPlayGroundComponent } from './api-play-ground.component';

describe('ApiPlayGroundComponent', () => {
  let component: ApiPlayGroundComponent;
  let fixture: ComponentFixture<ApiPlayGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPlayGroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPlayGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
