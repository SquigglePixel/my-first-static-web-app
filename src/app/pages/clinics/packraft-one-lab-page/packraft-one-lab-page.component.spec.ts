import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackraftOneLabPageComponent } from './packraft-one-lab-page.component';

describe('PackraftOneLabPageComponent', () => {
  let component: PackraftOneLabPageComponent;
  let fixture: ComponentFixture<PackraftOneLabPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackraftOneLabPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackraftOneLabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
