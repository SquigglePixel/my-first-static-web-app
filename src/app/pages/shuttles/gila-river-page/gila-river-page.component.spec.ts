import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GilaRiverPageComponent } from './gila-river-page.component';

describe('GilaRiverPageComponent', () => {
  let component: GilaRiverPageComponent;
  let fixture: ComponentFixture<GilaRiverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GilaRiverPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GilaRiverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
