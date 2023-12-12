import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-sub-category',
  templateUrl: './edit-sub-category.page.html',
  styleUrls: ['./edit-sub-category.page.scss'],
})
export class EditSubCategoryPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  return(){
    // this.router.navigate(['sub-category'])
  }
}
