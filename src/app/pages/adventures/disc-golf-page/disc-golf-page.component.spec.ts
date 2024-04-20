import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscGolfPageComponent } from './disc-golf-page.component';

describe('DiscGolfPageComponent', () => {
  let component: DiscGolfPageComponent;
  let fixture: ComponentFixture<DiscGolfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscGolfPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscGolfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
