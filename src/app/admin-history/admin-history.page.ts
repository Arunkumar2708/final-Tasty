import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendworkService } from '../backendwork.service';

export class HistoryRequestModal {
  user_id: any = localStorage.getItem('user_id');
  order_type: any;
  table_no: any;
}

@Component({
  selector: 'app-admin-history',
  templateUrl: './admin-history.page.html',
  styleUrls: ['./admin-history.page.scss'],
})
export class AdminHistoryPage implements OnInit {

  historyRequestModal: HistoryRequestModal = new HistoryRequestModal();

  historyList: any;

  dineInTableCount: any;

  showTableList = false;
  isDineIn = false;
  isTakeAway = false;
  isDoorDelivery = false;
  tableNo: any;

  constructor(private backend: BackendworkService, private route: ActivatedRoute,
    private router: Router, private alert: AlertController,
    private toastController: ToastController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.enableTakeAway();
    let requestData = {
      user_id: this.historyRequestModal.user_id
    };

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

  ionViewWillEnter() {
    this.enableTakeAway();
  }

  get items() {
    return Array.from({ length: this.dineInTableCount });
  }

  choodeTable(index: any) {
    console.log(index);
    this.tableNo = index;
    this.historyRequestModal.order_type = "1";
    this.historyRequestModal.table_no = "T" + (this.tableNo + 1);
    this.loadData();
  }

  enableDineIn() {
    this.showTableList = true;
    this.isDineIn = true;
    this.isTakeAway = false;
    this.isDoorDelivery = false;
    this.choodeTable(0);
    this.loadData();
  }

  enableTakeAway() {
    this.showTableList = false;
    this.isDineIn = false;
    this.isTakeAway = true;
    this.isDoorDelivery = false;
    this.tableNo = -1;
    this.historyRequestModal.order_type = "3";
    this.historyRequestModal.table_no = "";
    this.loadData();
  }

  enableDoorDelivery() {
    this.showTableList = false;
    this.isDineIn = false;
    this.isTakeAway = false;
    this.isDoorDelivery = true;
    this.tableNo = -1;
    this.historyRequestModal.order_type = "2";
    this.historyRequestModal.table_no = "";
    this.loadData();
  }

  loadData() {
    this.backend.getCompletedHistory(this.historyRequestModal).subscribe(async (res) => {
      let result: any = res;
      this.historyList = result.result;
      if (this.historyList.length == 0) {
        const toast = await this.toastController.create({
          message: 'No history found...',
          duration: 2000,
          icon: 'globe'
        });
        await toast.present();
      }
    })
  }

  async refund(order_id:any, items: any, event: any) {
    this.router.navigate(['/admin-preview'], {
      queryParams: {
        items: JSON.stringify(items),
        order_type: JSON.stringify(""),
        table_no: JSON.stringify(""),
        is_refund: JSON.stringify("1"),
        is_extra_items: JSON.stringify("0"),
        order_id: JSON.stringify(order_id),
        t_amt: JSON.stringify(""),
      }
    })
  }

  async print(order_id: String, event: any) {
    // event.stopPropagation();
    this.router.navigate(['admin-billing'], { queryParams: { order_id: JSON.stringify(order_id) } });
  }


}

