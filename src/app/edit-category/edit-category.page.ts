import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
})
export class EditCategoryPage implements OnInit {

  constructor(private router:Router) { }
  value:any="Pizza"
  ngOnInit() {
  }
  return(){
    this.router.navigate(['category'])
  }

}
