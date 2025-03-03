import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DproutputComponent } from './dproutput.component';

describe('DproutputComponent', () => {
  let component: DproutputComponent;
  let fixture: ComponentFixture<DproutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DproutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DproutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
