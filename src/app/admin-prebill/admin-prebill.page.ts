import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendworkService } from '../backendwork.service';

export class PreBillRequestModal {
  user_id: any = localStorage.getItem('user_id');
  key: any;
}

@Component({
  selector: 'app-admin-prebill',
  templateUrl: './admin-prebill.page.html',
  styleUrls: ['./admin-prebill.page.scss'],
})
export class AdminPrebillPage implements OnInit {
  preBillRequestModal: PreBillRequestModal = new PreBillRequestModal();
  user_id: any;
  preBillList: any;

  constructor(private backend: BackendworkService, private route: ActivatedRoute,
    private router: Router, private alert: AlertController,
    private toastController: ToastController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadData();
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData() {
    this.preBillRequestModal.key = "Pre-Bill";
    this.backend.getOrdersByStatus(this.preBillRequestModal).subscribe(async (res) => {
      let result: any = res;
      this.preBillList = result.result;
      if (this.preBillList.length == 0) {
        const toast = await this.toastController.create({
          message: 'No pre-bill found...',
          duration: 2000,
          icon: 'globe'
        });
        await toast.present();
      }
    })
  }

  async preBill(order_id: String, event: any) {
    const toast = await this.toastController.create({
      message: 'Bill printed...',
      duration: 2000,
      icon: 'globe'
    });
    await toast.present();
  }

  async print(order_id: String, total_amount: any, event: any) {
    // event.stopPropagation();
    this.router.navigate(['admin-billdetails'], {
      queryParams: {
        order_id: JSON.stringify(order_id),
        total_amount: JSON.stringify(total_amount)
      }
    });
  }

}
