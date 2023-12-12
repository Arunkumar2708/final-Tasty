import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }
  password: any;
  HidePass = true;
  show = false;
  ngOnInit() {
    this.password = 'password';
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  goadmin() {
    this.router.navigate(['admin-order']);
  }
  showPass() {
    this.HidePass = !this.HidePass;
  }

}
