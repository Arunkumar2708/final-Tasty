import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSubCategoryPage } from './edit-sub-category.page';

describe('EditSubCategoryPage', () => {
  let component: EditSubCategoryPage;
  let fixture: ComponentFixture<EditSubCategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditSubCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
