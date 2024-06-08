import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxePackraftPackageLabPageComponent } from './deluxe-packraft-package-page.component';

describe('DeluxePackraftPackageLabPageComponent', () => {
  let component: DeluxePackraftPackageLabPageComponent;
  let fixture: ComponentFixture<DeluxePackraftPackageLabPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeluxePackraftPackageLabPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeluxePackraftPackageLabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
