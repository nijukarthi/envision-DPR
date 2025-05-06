import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueProductionComponent } from './revenue-production.component';

describe('RevenueProductionComponent', () => {
  let component: RevenueProductionComponent;
  let fixture: ComponentFixture<RevenueProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenueProductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
