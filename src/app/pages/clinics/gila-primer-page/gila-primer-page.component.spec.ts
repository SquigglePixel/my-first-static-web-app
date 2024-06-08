import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GilaPrimerPageComponent } from './gila-primer-page.component';

describe('GilaPrimerPageComponent', () => {
  let component: GilaPrimerPageComponent;
  let fixture: ComponentFixture<GilaPrimerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GilaPrimerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GilaPrimerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
