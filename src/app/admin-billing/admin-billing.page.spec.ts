import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminBillingPage } from './admin-billing.page';

describe('AdminBillingPage', () => {
  let component: AdminBillingPage;
  let fixture: ComponentFixture<AdminBillingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminBillingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
