import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendworkService } from '../backendwork.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.page.html',
  styleUrls: ['./sub-category.page.scss'],
})
export class SubCategoryPage implements OnInit {
  category_id:any = '';
  category_name:any ='';
  subCategoryList:any[]=[];
  image_url: any;
  categaryTypes:any[] = [
    {id:1,name:'Veg'},
    {id:2,name:'Non-Veg'},
    {id:3,name:'Cakes'},
    {id:4,name:'Hot'},
    {id:5,name:'Cold'},
    {id:6,name:'Desserts'},
  ]
  user_id: any;
  list: any;

  constructor(private backendworkservice: BackendworkService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alert: AlertController,
    private toastController: ToastController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
    console.log(params)
    if (params != null) {
      this.category_id = params['category_id'];
      this.category_name = params['category_name'];
    }
  });
  this.refreshData()
  }

  gocreate(){
    this.router.navigate(['create-sub-category'],{queryParams : {category_id:this.category_id,category_name:this.category_name}})
  }
  goeditsub(event: Event, subCategoryModel : any) {
    event.stopPropagation();
    subCategoryModel.category_name = this.category_name
    subCategoryModel.isEditPage = true;
    this.router.navigate(['/create-sub-category'], {queryParams:subCategoryModel})
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
    let data:any = {};
    data.category_id = this.category_id
    data.category_name =this.category_name
    data.image_url =this.image_url
    data.user_id = localStorage.getItem('user_id')
    this.backendworkservice.getAllSubCategory(data).subscribe(async response => {
      console.log(response)
      if(!!response?.result && response?.result.length != 0){
        this.subCategoryList = [];
        this.subCategoryList = response.result;
        this.image_url = this.backendworkservice.getImageUrl();
      }

      if (this.subCategoryList.length == 0) {
        const toast = await this.toastController.create({
          message: 'No Data...',
          duration: 2000,
          icon: 'globe'
        });
        await toast.present();
      }
      loading.dismiss();
    })
  }

  getSubCategaryType(id:any){
    let type:any = this.categaryTypes?.filter((obj:any) => obj?.id == id);
    return !!type && type?.length != 0 ? type[0]?.name : '-'
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
            this.backendworkservice.deleteSubCategory({ sub_category_id: id }).subscribe(async (response) => {
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
