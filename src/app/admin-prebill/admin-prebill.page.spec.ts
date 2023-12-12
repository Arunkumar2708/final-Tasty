import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPrebillPage } from './admin-prebill.page';

describe('AdminPrebillPage', () => {
  let component: AdminPrebillPage;
  let fixture: ComponentFixture<AdminPrebillPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminPrebillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
