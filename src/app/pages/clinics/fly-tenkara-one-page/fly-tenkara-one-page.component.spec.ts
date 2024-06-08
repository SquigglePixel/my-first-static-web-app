import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyTenkaraOnePageComponent } from './fly-tenkara-one-page.component';

describe('FlyTenkaraOnePageComponent', () => {
  let component: FlyTenkaraOnePageComponent;
  let fixture: ComponentFixture<FlyTenkaraOnePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyTenkaraOnePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyTenkaraOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
