import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  createEmployee(){
    this.router.navigate(['create-employee'])
  }
  editEmployee(){
    this.router.navigate(['edit-employee'])
  }
}
