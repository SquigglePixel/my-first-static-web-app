import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamaTrekkingPageComponent } from './llama-trekking-page.component';

describe('LlamaTrekkingPageComponent', () => {
  let component: LlamaTrekkingPageComponent;
  let fixture: ComponentFixture<LlamaTrekkingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlamaTrekkingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlamaTrekkingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
