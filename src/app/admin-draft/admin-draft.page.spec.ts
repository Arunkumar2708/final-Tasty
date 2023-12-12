import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminDraftPage } from './admin-draft.page';

describe('AdminDraftPage', () => {
  let component: AdminDraftPage;
  let fixture: ComponentFixture<AdminDraftPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminDraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
