import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendworkService } from '../backendwork.service';
export class SubCategoryModel {

  sub_category_image: any = '';
  category_id: any = '';
  category_name: any = '';
  sub_category_name: any = '';
  sub_category_type: any = '';
  price: any = '';
  status: any;
  created_by: any;
  updated_by: any;
  sub_category_id: any;
}
@Component({
  selector: 'app-create-sub-category',
  templateUrl: './create-sub-category.page.html',
  styleUrls: ['./create-sub-category.page.scss'],
})

export class CreateSubCategoryPage implements OnInit {

  subCategoryModel: SubCategoryModel = new SubCategoryModel();
  url: any = '';
  isEnableActive: boolean = true;
  isDisableActive: boolean = false;
  isEditPage: boolean = false;

  chips = [
    { name: 'Veg', value: 1 },
    { name: 'Non-Veg', value: 2 },
    { name: 'Cakes', value: 3 },
    { name: 'Hot', value: 4 },
    { name: 'Cold', value: 5 },
    { name: 'Desserts', value: 6 }
  ];

  selectedChip: number = 0; // Numeric value of the selected chip

  setActiveChip(chipValue: number) {
    this.selectedChip = chipValue;
    // Send this.selectedChip to your API for interaction
    this.subCategoryModel.sub_category_type = this.selectedChip;
  }
  constructor(public backendworkservice: BackendworkService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params != null) {
        this.subCategoryModel.category_id = params['category_id'];
        this.subCategoryModel.category_name = params['category_name'];
        if (!!params['isEditPage']) {
          this.isEditPage = params['isEditPage'];
          this.subCategoryModel.sub_category_name = params['sub_category_name'];
          this.subCategoryModel.sub_category_type = params['sub_category_type'];
          this.selectedChip = Number(params['sub_category_type'])
          this.url = this.backendworkservice.getImageUrl() + params['sub_category_image'];
          this.subCategoryModel.price = params['price'];
          this.isEnableActive = params['status'] == '1' ? true : false;
          this.isDisableActive = params['status'] == '0' ? true : false;
          this.subCategoryModel.created_by = params['created_by'];
          this.subCategoryModel.updated_by = params['updated_by'];
          this.subCategoryModel.sub_category_id = params['sub_category_id']
        }
        console.log(this.isEnableActive)
      }
    });
  }

  async refreshData() {
    this.url = this.backendworkservice.getImageUrl();
  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target ? event.target.result : null;
        this.subCategoryModel.sub_category_image = this.url.split(',')[1];
      }

      reader.readAsDataURL(event.target.files[0]); // read file as data url
    }
  }
  async return() {
    let data: any = {};
    data.category_id = this.subCategoryModel.category_id;
    data.category_name = this.subCategoryModel.category_name;
    data.sub_category_name = this.subCategoryModel.sub_category_name;
    data.sub_category_type = this.subCategoryModel.sub_category_type;
    data.sub_category_image = this.subCategoryModel.sub_category_image;
    data.price = this.subCategoryModel.price;
    data.status = this.isEnableActive ? 1 : 0;
    if (!!this.isEditPage) {
      data.created_by = this.subCategoryModel.created_by;

      data.updated_by = localStorage.getItem('user_id');
      data.sub_category_id = this.subCategoryModel.sub_category_id
      this.backendworkservice.updateSubCategory(data).subscribe(async response => {
        const toast = await this.toastController.create({
          message: response.message,
          duration: 2000,
          icon: 'globe'
        });
        await toast.present();
        if (response.result == "1") {
          this.router.navigate(['sub-category'], { queryParams: { category_id: this.subCategoryModel.category_id, category_name: this.subCategoryModel.category_name } });
        }
        console.log(response);

      });
    }
    else {
      // const loading = await this.loadingController.create({ spinner: 'circles' });
      // loading.present();
      data.created_by = localStorage.getItem('user_id')
      this.backendworkservice.addSubCategory(data).subscribe(
        async (response) => {
          console.log(response);
          const toast = await this.toastController.create({
            message: response.message,
            duration: 2000,
            icon: 'globe'
          });
          await toast.present();
          if (response.result == "1") {
            this.router.navigate(['sub-category'], { queryParams: { category_id: this.subCategoryModel.category_id, category_name: this.subCategoryModel.category_name } });
          }
          // loading.dismiss();
        });
    }

    if (!this.subCategoryModel.sub_category_name) {
      const toast = await this.toastController.create({
        message: 'Enter sub Category...!',
        duration: 2000,
        icon: 'globe'
      });
      await toast.present();
    }

    else if (this.subCategoryModel.sub_category_name) {


    }





  }

  changeEnableClass() {
    this.isEnableActive = true;
    this.isDisableActive = false;
  }

  changeDisableClass() {
    this.isDisableActive = true;
    this.isEnableActive = false;
  }


}
