import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanFrancisoRiverPageComponent } from './san-franciso-river-page.component';

describe('SanFrancisoRiverPageComponent', () => {
  let component: SanFrancisoRiverPageComponent;
  let fixture: ComponentFixture<SanFrancisoRiverPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanFrancisoRiverPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanFrancisoRiverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
