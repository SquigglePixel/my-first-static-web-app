import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyAndTenkaraOneLabPageComponent } from './fly-and-tenkara-one-lab-page.component';

describe('FlyAndTenkaraOneLabPageComponent', () => {
  let component: FlyAndTenkaraOneLabPageComponent;
  let fixture: ComponentFixture<FlyAndTenkaraOneLabPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyAndTenkaraOneLabPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyAndTenkaraOneLabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
