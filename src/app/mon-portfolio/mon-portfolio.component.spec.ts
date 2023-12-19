import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPortfolioComponent } from './mon-portfolio.component';

describe('MonPortfolioComponent', () => {
  let component: MonPortfolioComponent;
  let fixture: ComponentFixture<MonPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonPortfolioComponent]
    });
    fixture = TestBed.createComponent(MonPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
