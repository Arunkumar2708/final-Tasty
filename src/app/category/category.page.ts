import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendworkService } from '../backendwork.service';
import { CategoryModel } from '../add-category/add-category.page';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  user_id: any;
  image_url: any;
  list: any;

  constructor(private backend: BackendworkService, private route: ActivatedRoute, private router: Router, private alert: AlertController, private toastController: ToastController, private loadingCtrl: LoadingController) { }


  ngOnInit() {

    localStorage.setItem('user_id', "652033e7521ab");
    this.user_id = localStorage.getItem('user_id');
    this.refreshData();

  }

  ionViewWillEnter() {
    this.refreshData();
  }

  doRefresh(event: any) {
    this.refreshData();

    setTimeout(() => {
      event.target.complete(); // Hide the refresher when done
    }, 1000);
  }

  async refreshData() {
    const loading = await this.loadingCtrl.create({ spinner: 'circles' });
    loading.present();
    this.backend.getAllCategory({ user_id: this.user_id }).subscribe(async (res) => {
      let result: any = res;
      this.list = result.result;
      this.image_url = this.backend.getImageUrl();

      loading.dismiss();
      if (this.list.length == 0) {
        const toast = await this.toastController.create({
          message: 'No Data...',
          duration: 2000,
          icon: 'globe'
        });
        await toast.present();
      }
    })
  }

  addcategory() {
    this.router.navigate(['/add-category'])
  }
  goedit(event: Event, categoryModel: any) {
    event.stopPropagation();
    this.router.navigate(['/add-category'], { queryParams: categoryModel })
  }
  gosubcategory(datas: any) {
    this.router.navigate(['sub-category'], { queryParams: { category_id: datas.category_id, category_name: datas.category_name } })
  }

  async showAlert(id: String, name: String, event: Event) {
    event.stopPropagation();
    const alert = this.alert.create({
      header: 'Delete',
      message: 'Are you sure want to delete ' + name + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: async () => {
            const loading = await this.loadingCtrl.create({ spinner: 'circles' });
            loading.present();
            this.backend.deleteCategory({ category_id: id }).subscribe(async (response) => {
              if (response.result == "1") {
                this.refreshData();
              }
              const toast = await this.toastController.create({
                message: response.message,
                duration: 2000,
                icon: 'globe'
              });
              await toast.present();
              loading.dismiss();
            })
          }
        }
      ]
    });

    (await alert).present();

  }
}
