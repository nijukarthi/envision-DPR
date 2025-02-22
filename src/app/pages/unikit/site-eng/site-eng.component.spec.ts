import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEngComponent } from './site-eng.component';

describe('SiteEngComponent', () => {
  let component: SiteEngComponent;
  let fixture: ComponentFixture<SiteEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteEngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
