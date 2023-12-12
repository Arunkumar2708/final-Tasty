import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.page.html',
  styleUrls: ['./otp-verify.page.scss'],
})
export class OtpVerifyPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  accept(){
    this.router.navigate(['set-password'])
}
}
