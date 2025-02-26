import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgrToolComponent } from './dgr-tool.component';

describe('DgrToolComponent', () => {
  let component: DgrToolComponent;
  let fixture: ComponentFixture<DgrToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DgrToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgrToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
