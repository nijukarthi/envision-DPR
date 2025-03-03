import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DproutputValueComponent } from './dproutput-value.component';

describe('DproutputValueComponent', () => {
  let component: DproutputValueComponent;
  let fixture: ComponentFixture<DproutputValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DproutputValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DproutputValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
