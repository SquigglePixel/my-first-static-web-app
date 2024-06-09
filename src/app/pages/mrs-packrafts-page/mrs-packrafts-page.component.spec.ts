import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrsPackraftsPageComponent } from './mrs-packrafts-page.component';

describe('MrsPackraftsPageComponent', () => {
  let component: MrsPackraftsPageComponent;
  let fixture: ComponentFixture<MrsPackraftsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrsPackraftsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MrsPackraftsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
