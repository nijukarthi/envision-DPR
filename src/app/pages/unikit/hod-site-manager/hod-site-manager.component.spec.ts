import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodSiteManagerComponent } from './hod-site-manager.component';

describe('HodSiteManagerComponent', () => {
  let component: HodSiteManagerComponent;
  let fixture: ComponentFixture<HodSiteManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HodSiteManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodSiteManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
