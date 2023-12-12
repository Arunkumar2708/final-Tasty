import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminKotPage } from './admin-kot.page';

describe('AdminKotPage', () => {
  let component: AdminKotPage;
  let fixture: ComponentFixture<AdminKotPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminKotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
