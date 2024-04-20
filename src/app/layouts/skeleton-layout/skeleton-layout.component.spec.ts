import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkeletonLayoutComponent } from './skeleton-layout.component';

describe('SkeletonLayoutComponent', () => {
  let component: SkeletonLayoutComponent;
  let fixture: ComponentFixture<SkeletonLayoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
