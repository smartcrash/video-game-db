import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersIconComponent } from './sliders-icon.component';

describe('SlidersIconComponent', () => {
  let component: SlidersIconComponent;
  let fixture: ComponentFixture<SlidersIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidersIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidersIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
