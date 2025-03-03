import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DprinputComponent } from './dprinput.component';

describe('DprinputComponent', () => {
  let component: DprinputComponent;
  let fixture: ComponentFixture<DprinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DprinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DprinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
