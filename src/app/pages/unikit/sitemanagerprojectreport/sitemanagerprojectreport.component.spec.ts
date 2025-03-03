import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemanagerprojectreportComponent } from './sitemanagerprojectreport.component';

describe('SitemanagerprojectreportComponent', () => {
  let component: SitemanagerprojectreportComponent;
  let fixture: ComponentFixture<SitemanagerprojectreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitemanagerprojectreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitemanagerprojectreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
