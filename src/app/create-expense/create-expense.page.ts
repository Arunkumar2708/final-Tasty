import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.page.html',
  styleUrls: ['./create-expense.page.scss'],
})
export class CreateExpensePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  return(){
    this.router.navigate(['expenses'])
  }
}
