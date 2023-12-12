import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendworkService } from '../backendwork.service';


export class BillRequestModal {
  order_id: any;
  user_id: any = localStorage.getItem('user_id');
  key: any;
  updated_by: any = localStorage.getItem('user_id');
}

@Component({
  selector: 'app-admin-billing',
  templateUrl: './admin-billing.page.html',
  styleUrls: ['./admin-billing.page.scss'],
})
export class AdminBillingPage implements OnInit {
  billRequestModal: BillRequestModal = new BillRequestModal();
  constructor(public backend: BackendworkService, private activatedRoute: ActivatedRoute, public router: Router,
    public loadingController: LoadingController, public toastController: ToastController) { }


  list: any;
  result: any;
  items: any;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(async params => {
      if (params != null) {
        this.billRequestModal.order_id = JSON.parse(params['order_id']);

        const loading = await this.loadingController.create({ spinner: 'circles' });
        loading.present();
        this.backend.getOrderDetails(this.billRequestModal).subscribe(async res => {
          let data: any = res;
          this.result = data.result ?? data.result;
          this.items = data.items;
          loading.dismiss();
        })
      }
    });
  }

  async updateStatus(status: any, event: any) {
    this.billRequestModal.key = status;
    const loading = await this.loadingController.create({ spinner: 'circles' });
    loading.present();

    this.backend.updateOrderStatus(this.billRequestModal).subscribe(async response => {
      const toast = await this.toastController.create({
        message: response.message,
        duration: 2000,
        icon: 'globe'
      });
      await toast.present();
      if (response.result == "1") {
        event.stopPropagation();
        this.router.navigate(['admin-order'], { queryParams: { navigate: true } });
      }
      loading.dismiss();
    });
  }

}
