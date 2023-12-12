import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDraftbillingPage } from './admin-draftbilling.page';

describe('AdminDraftbillingPage', () => {
  let component: AdminDraftbillingPage;
  let fixture: ComponentFixture<AdminDraftbillingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminDraftbillingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
