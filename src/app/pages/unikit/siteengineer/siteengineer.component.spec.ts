import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteengineerComponent } from './siteengineer.component';

describe('SiteengineerComponent', () => {
  let component: SiteengineerComponent;
  let fixture: ComponentFixture<SiteengineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteengineerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
