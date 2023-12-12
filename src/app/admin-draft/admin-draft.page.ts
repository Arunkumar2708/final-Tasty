import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendworkService } from '../backendwork.service';

export class DraftRequestModal {
  user_id: any = localStorage.getItem('user_id');
  key: any;
}

@Component({
  selector: 'app-admin-draft',
  templateUrl: './admin-draft.page.html',
  styleUrls: ['./admin-draft.page.scss'],
})
export class AdminDraftPage implements OnInit {
  draftRequestModal: DraftRequestModal = new DraftRequestModal();
  draftList: any;

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
    this.draftRequestModal.key = "Draft";
    this.backend.getOrdersByStatus(this.draftRequestModal).subscribe(async (res) => {
      let result: any = res;
      this.draftList = result.result;
      if (this.draftList.length == 0) {
        const toast = await this.toastController.create({
          message: 'No draft found...',
          duration: 2000,
          icon: 'globe'
        });
        await toast.present();
      }
    })
  }

  async navigate(order_id: String, status: String, total_amount: any, event: any) {
    // event.stopPropagation();
    if (status == "1") {
      this.router.navigate(['admin-billdetails'], {
        queryParams: {
          order_id: JSON.stringify(order_id),
          total_amount: JSON.stringify(total_amount)
        }
      });
    } else {
      this.router.navigate(['admin-billing'], { queryParams: { order_id: JSON.stringify(order_id) } });
    }
  }

}
