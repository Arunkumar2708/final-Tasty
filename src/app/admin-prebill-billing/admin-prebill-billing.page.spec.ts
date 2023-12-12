import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPrebillBillingPage } from './admin-prebill-billing.page';

describe('AdminPrebillBillingPage', () => {
  let component: AdminPrebillBillingPage;
  let fixture: ComponentFixture<AdminPrebillBillingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminPrebillBillingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
