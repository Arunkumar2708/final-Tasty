import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendworkService } from '../backendwork.service';

export class CategoryModel {
  category_name: any;
  category_image: any;
  status: any;
  created_by: any;
  category_id: any;
  updated_by: any;
}

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {
  categoryModel: CategoryModel = new CategoryModel();
  url: any = '';
  isEnableActive = true;
  isDisableActive = false;
  constructor(public categoryService: BackendworkService, private activatedRoute: ActivatedRoute, public router: Router,
    public loadingController: LoadingController, public toastController: ToastController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params != null) {
        this.categoryModel.category_id = params['category_id'];
        if (params['category_image']) {
          this.url = this.categoryService.getImageUrl() + params['category_image'];
          this.categoryModel.category_image = "";
        }
        this.categoryModel.category_name = params['category_name'];
        this.categoryModel.status = params['status'];
        if (params['status'] == '0') {
          this.changeDisableClass();
        } else {
          this.changeEnableClass();
        }
      }
    });
  }
  return() {
    this.router.navigate(['category'])
  }

  changeEnableClass() {
    this.isEnableActive = true;
    this.isDisableActive = false;
  }

  changeDisableClass() {
    this.isDisableActive = true;
    this.isEnableActive = false;
  }

  async onsubmit() {

    if (!this.categoryModel.category_name) {
      const toast = await this.toastController.create({
        message: 'Enter Category...!',
        duration: 2000,
        icon: 'globe'
      });
      await toast.present();
    } else {
      // const loading = await this.loadingController.create({ spinner: 'circles' });
      // loading.present();
      this.categoryModel.category_image = this.categoryModel.category_image ? this.categoryModel.category_image : "";
      this.categoryModel.status = this.isEnableActive ? 1 : 0;
      if (!this.categoryModel.category_id) {
        this.categoryModel.created_by = localStorage.getItem('user_id');
        this.categoryService.addCategory(this.categoryModel).subscribe(async response => {
          const toast = await this.toastController.create({
            message: response.message,
            duration: 2000,
            icon: 'globe'
          });
          await toast.present();
          if (response.result == "1") {
            this.router.navigate(['category']);
          }
          // loading.dismiss();
        });
      } else {
        this.categoryModel.updated_by = localStorage.getItem('user_id');
        this.categoryService.updateCategory(this.categoryModel).subscribe(async response => {
          const toast = await this.toastController.create({
            message: response.message,
            duration: 2000,
            icon: 'globe'
          });
          await toast.present();
          if (response.result == "1") {
            this.router.navigate(['category']);
          }
          // loading.dismiss();
        });
      }
    }

  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target ? event.target.result : null;
        this.categoryModel.category_image = this.url.split(',')[1];
      }

      reader.readAsDataURL(event.target.files[0]); // read file as data url
    }
  }
}
