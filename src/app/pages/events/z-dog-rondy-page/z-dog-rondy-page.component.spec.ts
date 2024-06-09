import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZDogRondyPageComponent } from './z-dog-rondy-page.component';

describe('ZDogRondyPageComponent', () => {
  let component: ZDogRondyPageComponent;
  let fixture: ComponentFixture<ZDogRondyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZDogRondyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZDogRondyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
