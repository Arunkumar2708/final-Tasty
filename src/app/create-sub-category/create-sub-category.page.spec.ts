ximport { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSubCategoryPage } from './create-sub-category.page';

describe('CreateSubCategoryPage', () => {
  let component: CreateSubCategoryPage;
  let fixture: ComponentFixture<CreateSubCategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateSubCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
