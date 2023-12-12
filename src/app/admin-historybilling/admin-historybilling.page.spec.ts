import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminHistorybillingPage } from './admin-historybilling.page';

describe('AdminHistorybillingPage', () => {
  let component: AdminHistorybillingPage;
  let fixture: ComponentFixture<AdminHistorybillingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminHistorybillingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
