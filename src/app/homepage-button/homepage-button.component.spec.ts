import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageButtonComponent } from './homepage-button.component';

describe('HomepageButtonComponent', () => {
  let component: HomepageButtonComponent;
  let fixture: ComponentFixture<HomepageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
