import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {

  constructor(private router:Router) { }
  EName:any="Tasty Dots-1"
  ENumber:any="5381927983"
  EPassword:any="Tasty@123"
  ngOnInit() {
  }
  return(){
    this.router.navigate(['employees'])
  }
}
