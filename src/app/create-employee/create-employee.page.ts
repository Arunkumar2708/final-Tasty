import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  return(){
    this.router.navigate(['employees'])
  }
}
