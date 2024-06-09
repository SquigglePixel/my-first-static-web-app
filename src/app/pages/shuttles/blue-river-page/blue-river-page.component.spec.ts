import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueRiverPageComponent } from './blue-river-page.component';

describe('BlueRiverPageComponent', () => {
  let component: BlueRiverPageComponent;
  let fixture: ComponentFixture<BlueRiverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueRiverPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueRiverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
