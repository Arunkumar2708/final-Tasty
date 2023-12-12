import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-preview',
  templateUrl: './staff-preview.page.html',
  styleUrls: ['./staff-preview.page.scss'],
})
export class StaffPreviewPage  implements OnInit {

  constructor() { }

  ngOnInit() {}
  productArray=[
    {
     // img:"../../assets/burger.jpg",
      //amt:400,
      qnt:1,
    }
  ];
  inc(prod:any){
    //console.log(prod.qnt);
    if(prod.qnt!=99){
    prod.qnt+=1;
    }
  }
  dec(prod:any){
    if(prod.qnt!=0){
      prod.qnt-=1;
      }

  }

}
