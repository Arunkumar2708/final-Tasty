import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backorderpage(){
    this.router.navigate(['admin-order']);
  }
}
