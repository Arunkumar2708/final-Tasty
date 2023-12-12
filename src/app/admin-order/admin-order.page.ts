import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendworkService } from '../backendwork.service';
@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.page.html',
  styleUrls: ['./admin-order.page.scss'],
})

export class AdminOrderPage implements OnInit {

  showTableList = false;
  isDineIn = false;
  isTakeAway = false;
  isDoorDelivery = false;
  tableNo: any;

  first_category_id: any;

  user_id: any;
  image_url: any;
  categoryList: any;
  subCategoryList: any;
  menuItems: any[] = [];
  uniqueArray: any[] = [];

  order_type: any;
  dineInTableCount: any;

  is_extra_items: any = "0";
  order_id: any = "";
  t_amt:any = "";

  constructor(private backend: BackendworkService, private route: ActivatedRoute,
    private router: Router, private alert: AlertController,
    private toastController: ToastController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    localStorage.setItem('user_id', "652033e7521ab");
    this.user_id = localStorage.getItem('user_id');
    this.loadData();
  }

  ionViewWillEnter() {
    // this.route.queryParams.subscribe(params => {
    //   if (params['navigate']) {
    this.loadData();
    this.menuItems = [];
    this.isDineIn = false;
    this.isTakeAway = false;
    this.isDoorDelivery = false;
    this.showTableList = false;
    this.tableNo = -1;
    this.is_extra_items = "0"
    this.order_id = "";
    this.t_amt = "";
    //     params['navigate'] = false;
    //   }
    // });

  }

  async loadData() {
    const loading = await this.loadingCtrl.create({ spinner: 'circles' });
    loading.present();
    this.backend.getAllCategory({ user_id: this.user_id }).subscribe(async (res) => {
      let result: any = res;
      this.categoryList = result.result;
      this.image_url = this.backend.getImageUrl();
      if (this.categoryList.length == 0) {
        const toast = await this.toastController.create({
          message: 'No category found...',
          duration: 2000,
          icon: 'globe'
        });
        await toast.present();
      }
    })

    let requestData = {
      user_id: this.user_id
    };
    this.backend.getSubCategoryForOrder(requestData).subscribe(async (res) => {
      let result: any = res;
      this.subCategoryList = result.result;
      this.image_url = this.backend.getImageUrl();

      loading.dismiss();
      if (this.subCategoryList.length == 0) {
        const toast = await this.toastController.create({
          message: 'No sub category found...',
          duration: 2000,
          icon: 'globe'
        });
        await toast.present();
      }
    })

    this.backend.getDineInTableCount(requestData).subscribe(async (res) => {
      let result: any = res;
      this.dineInTableCount = result.total;
      if (this.dineInTableCount == 0) {
        const toast = await this.toastController.create({
          message: 'No tables found...',
          duration: 2000,
          icon: 'globe'
        });
        await toast.present();
      }
    })

  }

  get items() {
    return Array.from({ length: this.dineInTableCount });
  }
  enableDineIn() {
    this.showTableList = true;
    this.isDineIn = true;
    this.isTakeAway = false;
    this.isDoorDelivery = false;
  }

  enableTakeAway() {
    this.showTableList = false;
    this.isDineIn = false;
    this.isTakeAway = true;
    this.isDoorDelivery = false;
    this.tableNo = -1;
  }

  enableDoorDelivery() {
    this.showTableList = false;
    this.isDineIn = false;
    this.isTakeAway = false;
    this.isDoorDelivery = true;
    this.tableNo = -1;
  }

  choodeTable(index: any, event: Event) {
    let tableRequestData = {
      user_id: this.user_id,
      table_no: "T" + (index + 1)
    };
    this.backend.checkOrderForDineInTable(tableRequestData).subscribe(async (res) => {
      if (res.result == "0") {
        this.tableNo = index;
      } else if (res.result == "1") {
        this.tableNo = -1;
        this.showAlert(res, index, event);
      } else {
        const toast = await this.toastController.create({
          message: 'Some previous order of this table not updated. please check with your admin',
          duration: 2000,
          icon: 'globe'
        });
        await toast.present();
      }
    })

  }

  async showAlert(res: any, index: any, event: Event) {
    event.stopPropagation();
    const alert = this.alert.create({
      header: 'Add',
      message: 'Order is going on for this table. Are you sure want to add items?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: async () => {
            this.tableNo = index;
            this.order_id = res.order_id;
            this.is_extra_items = "1";
            this.t_amt = res.total_amount;
          }
        }
      ]
    });

    (await alert).present();

  }

  increment(data: any) {
    data.qty++;
    this.menuItems.push(data);
  }
  decrement(data: any) {
    if (data.qty > 0) {
      data.qty--;
      this.menuItems.push(data);
    }

  }
  Inview(navTag: any) {
    const element = document.getElementById(navTag);
    if (element != null) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    }
  }

  async addToCart(event: Event) {
    this.uniqueArray = this.menuItems.filter(
      (obj, index, self) =>
        index === self.findIndex((o) => (o.sub_category_id === obj.sub_category_id && o.qty > 0))
    );
    if (!this.isDineIn && !this.isDoorDelivery && !this.isTakeAway) {
      const toast = await this.toastController.create({
        message: 'Please select order type',
        duration: 2000,
        icon: 'globe'
      });
      await toast.present();
    } else if (this.isDineIn && this.tableNo < 0) {
      const toast = await this.toastController.create({
        message: 'Please select table',
        duration: 2000,
        icon: 'globe'
      });
      await toast.present();
    } else if (this.uniqueArray.length == 0) {
      const toast = await this.toastController.create({
        message: 'Please select menu',
        duration: 2000,
        icon: 'globe'
      });
      await toast.present();
    }
    else {
      event.stopPropagation();

      if (this.isDineIn) {
        this.order_type = '1';
      } else if (this.isDoorDelivery) {
        this.order_type = '2';
      } else if (this.isTakeAway) {
        this.order_type = '3';
      }
      this.router.navigate(['/admin-preview'], {
        queryParams: {
          items: JSON.stringify(this.uniqueArray),
          order_type: JSON.stringify(this.order_type),
          table_no: JSON.stringify(this.tableNo + 1),
          is_refund: JSON.stringify("0"),
          is_extra_items: JSON.stringify(this.is_extra_items),
          order_id: JSON.stringify(this.order_id),
          t_amt: JSON.stringify(this.t_amt),
        }
      })
    }
  }
}

