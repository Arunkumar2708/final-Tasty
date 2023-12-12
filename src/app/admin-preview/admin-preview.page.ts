import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendworkService } from '../backendwork.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


export class FinalProductModel {
  order_type: any;
  sub_total: any;
  total_amount: any;
  created_by: any;
  table_no: any;
  customer_number: any = "";
  order_items: any;
}

export class UpdateProductModel {
  order_id: any;
  is_refund: any;
  is_extra_items: any;
  updated_by: any;
  order_items: any;
  total_amount: any;
}

export class FinalProductItemsModel {
  sub_category_id: any;
  total_price: any;
  qty: any;
}

@Component({
  selector: 'app-admin-preview',
  templateUrl: './admin-preview.page.html',
  styleUrls: ['./admin-preview.page.scss'],
})

export class AdminPreviewComponent implements OnInit {
  finalProductModel: FinalProductModel = new FinalProductModel();
  finalProductItemsModel: FinalProductItemsModel = new FinalProductItemsModel();
  updateProductModel: UpdateProductModel = new UpdateProductModel();

  constructor(private backend: BackendworkService, public activatedRoute: ActivatedRoute,
    private router: Router, public loadingController: LoadingController,
    private toastController: ToastController,
    private modalController: ModalController) { }


  productArray: any[] = [];
  image_url: any;
  order_type: any;
  table_no: any;
  is_refund: any;
  is_extra_items: any;
  order_id: any;
  t_amt: any;

  finalProductItems: any[] = [];

  ngOnInit() {
    this.image_url = this.backend.getImageUrl();
    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        this.productArray = JSON.parse(params['items']);
        this.order_type = JSON.parse(params['order_type']);
        this.table_no = JSON.parse(params['table_no']);
        this.is_refund = JSON.parse(params['is_refund']);
        this.is_extra_items = JSON.parse(params['is_extra_items']);
        this.order_id = JSON.parse(params['order_id']);
        this.t_amt = JSON.parse(params['t_amt']);

        console.log(this.is_refund);
        console.log(this.is_extra_items);
      }
    });
  }

  inc(prod: any) {
    prod.qty++;
  }
  dec(prod: any) {
    if (prod.qty > 0) {
      prod.qty--;
    }
  }

  async onsubmit(event: Event) {
    let total_amount = 0;
    this.finalProductModel.order_type = this.order_type;
    if (this.table_no > 0) {
      this.finalProductModel.table_no = "T" + this.table_no;
    } else {
      this.finalProductModel.table_no = "";
    }
    this.finalProductModel.created_by = localStorage.getItem('user_id');
    // /admin-billdetails
    for (let i = 0; i < this.productArray.length; i++) {
      if (parseInt(this.productArray[i].qty) > 0) {
        this.finalProductItemsModel = new FinalProductItemsModel();
        total_amount += parseInt(this.productArray[i].qty) * parseInt(this.productArray[i].price);
        this.finalProductItemsModel.sub_category_id = this.productArray[i].sub_category_id;
        this.finalProductItemsModel.qty = this.productArray[i].qty;
        this.finalProductItemsModel.total_price = parseInt(this.productArray[i].qty) * parseInt(this.productArray[i].price);
        this.finalProductItems.push(this.finalProductItemsModel);
      }
    }
    this.finalProductModel.total_amount = total_amount;
    this.finalProductModel.sub_total = total_amount;
    this.finalProductModel.order_items = this.finalProductItems;

    if (total_amount > 0) {
      const loading = await this.loadingController.create({ spinner: 'circles' });
      loading.present();
      if (this.is_refund == "1" || this.is_extra_items == "1") {

        this.updateProductModel.is_extra_items = this.is_extra_items;
        this.updateProductModel.is_refund = this.is_refund;
        this.updateProductModel.order_id = this.order_id;
        this.updateProductModel.order_items = this.finalProductItems;
        this.updateProductModel.updated_by = localStorage.getItem('user_id');
        if (this.is_extra_items == "1") {
          this.updateProductModel.total_amount = total_amount + parseInt(this.t_amt);
        }else {
          this.updateProductModel.total_amount = total_amount;
        }

        this.backend.updateOrderItems(this.updateProductModel).subscribe(async response => {
          const toast = await this.toastController.create({
            message: response.message,
            duration: 2000,
            icon: 'globe'
          });
          await toast.present();
          if (response.result == "1") {
            event.stopPropagation();
            if (this.is_extra_items == "1") {
              this.router.navigate(['admin-order'], { queryParams: { navigate: true } });
            } else {
              this.router.navigate(['admin-billing'],
                { queryParams: { order_id: JSON.stringify(this.order_id) } });
            }
          }
          loading.dismiss();
        });
      } else {
        this.backend.placeOrder(this.finalProductModel).subscribe(async response => {
          const toast = await this.toastController.create({
            message: response.message,
            duration: 2000,
            icon: 'globe'
          });
          await toast.present();
          if (response.result == "1") {
            event.stopPropagation();
            if (this.order_type == "1") {
              this.router.navigate(['admin-order'], { queryParams: { navigate: true } });

            } else {
              this.router.navigate(['admin-billdetails'], {
                queryParams: {
                  order_id: JSON.stringify(response.order_id),
                  total_amount: JSON.stringify(this.finalProductModel.total_amount)
                }
              });
            }
          }
          loading.dismiss();
        });
      }
    } else {
      const toast = await this.toastController.create({
        message: 'Please select menu',
        duration: 2000,
        icon: 'globe'
      });
      await toast.present();
    }
    await this.modalController.dismiss();

  }
}
