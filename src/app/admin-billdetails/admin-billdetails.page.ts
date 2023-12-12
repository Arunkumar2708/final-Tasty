import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendworkService } from '../backendwork.service';


export class CustomerDetailModel {
  order_id: any;
  updated_by: any;
  customer_number: any;
  payment_type: any;
  discount: any = 0;
  total_amount: any;
}

@Component({
  selector: 'app-admin-billdetails',
  templateUrl: './admin-billdetails.page.html',
  styleUrls: ['./admin-billdetails.page.scss'],
})
export class AdminBilldetailsPage implements OnInit {
  customerDetailModel: CustomerDetailModel = new CustomerDetailModel();
  isCash = false
  isCard = false
  isUpi = false
  payment_type = 0;

  total_amount = 0;

  constructor(public backend: BackendworkService, private activatedRoute: ActivatedRoute, public router: Router,
    public loadingController: LoadingController, public toastController: ToastController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params != null) {
        this.customerDetailModel.order_id = JSON.parse(params['order_id']);
        this.total_amount = parseInt(JSON.parse(params['total_amount']));
      }
    });
  }

  enableCash() {
    this.isCash = true;
    this.isCard = false;
    this.isUpi = false;
    this.payment_type = 1;
  }

  enableCard() {
    this.isCash = false;
    this.isCard = true;
    this.isUpi = false;
    this.payment_type = 2;
  }

  enableUpi() {
    this.isCash = false;
    this.isCard = false;
    this.isUpi = true;
    this.payment_type = 3;
  }

  async onsubmit(event: any) {
    // admin-billing

    if (this.payment_type == 0) {
      const toast = await this.toastController.create({
        message: "Please select payment type",
        duration: 2000,
        icon: 'globe'
      });
      await toast.present();
    } else {
      const loading = await this.loadingController.create({ spinner: 'circles' });
      loading.present();

      this.customerDetailModel.total_amount = Math.round(this.total_amount -
        ((parseInt(this.customerDetailModel.discount) * this.total_amount) / 100));
      this.customerDetailModel.updated_by = localStorage.getItem('user_id');
      this.customerDetailModel.payment_type = this.payment_type;
      if (this.customerDetailModel.customer_number == null) {
        this.customerDetailModel.customer_number = "";
      }

      this.backend.updatePaymentType(this.customerDetailModel).subscribe(async response => {
        const toast = await this.toastController.create({
          message: response.message,
          duration: 2000,
          icon: 'globe'
        });
        await toast.present();
        if (response.result == "1") {
          event.stopPropagation();
          this.router.navigate(['admin-billing'], 
          { queryParams: { order_id: JSON.stringify(this.customerDetailModel.order_id) } });
        }
        loading.dismiss();
      });
    }
  }
}


