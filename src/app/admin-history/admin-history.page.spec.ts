import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminHistoryPage } from './admin-history.page';

describe('AdminHistoryPage', () => {
  let component: AdminHistoryPage;
  let fixture: ComponentFixture<AdminHistoryPage>;

  beforeEach(a sync(() => {
    fixture = TestBed.createComponent(AdminHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
