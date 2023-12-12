import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendworkService } from '../backendwork.service';


export class DineInTableCountModel {
  user_id: any = localStorage.getItem('user_id');
  count: any = "";
  action: any;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  dineInTableCount: any;

  ionViewWillEnter() {
    this.dineInTableCountModel.count = "";
    this.refreshData();
  }

  dineInTableCountModel: DineInTableCountModel = new DineInTableCountModel();

  constructor(private backend: BackendworkService, private route: ActivatedRoute,
    private router: Router, private alert: AlertController,
    private toastController: ToastController, private loadingCtrl: LoadingController) { }

  ngOnInit() {

    this.refreshData();
  }

  async refreshData() {
    const loading = await this.loadingCtrl.create({ spinner: 'circles' });
    loading.present();
    this.backend.getDineInTableCount(this.dineInTableCountModel).subscribe(async (res) => {
      let result: any = res;
      this.dineInTableCount = result.total;
      loading.dismiss();
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

  submit(action: any) {
    this.dineInTableCountModel.action = action;
    this.backend.updateDineInTableCount(this.dineInTableCountModel).subscribe(async (res) => {
      if (res.result == "1") {
        this.router.navigate(['admin-order']);
      }
    })
  }
}