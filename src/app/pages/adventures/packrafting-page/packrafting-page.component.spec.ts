import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackraftingPageComponent } from './packrafting-page.component';

describe('PackraftingPageComponent', () => {
  let component: PackraftingPageComponent;
  let fixture: ComponentFixture<PackraftingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackraftingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackraftingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
