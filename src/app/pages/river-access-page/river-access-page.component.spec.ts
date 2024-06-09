import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverAccessPageComponent } from './river-access-page.component';

describe('RiverAccessPageComponent', () => {
  let component: RiverAccessPageComponent;
  let fixture: ComponentFixture<RiverAccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiverAccessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverAccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
