import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackraftOnePageComponent } from './packraft-one-page.component';

describe('PackraftOnePageComponent', () => {
  let component: PackraftOnePageComponent;
  let fixture: ComponentFixture<PackraftOnePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackraftOnePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackraftOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
