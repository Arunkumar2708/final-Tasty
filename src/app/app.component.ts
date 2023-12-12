import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Order', url: '/admin-order', icon: 'heart'},
    { title: 'Category', url: '/category', icon: 'mail' },
    // { title: 'Expenses', url: '/expenses', icon: 'heart' },
    // { title: 'Transaction', url: '/transaction', icon: 'mail' },
    // { title: 'Employees', url: '/employees', icon: 'heart' },
    // { title: 'Staff',url: '/staff-preview', icon: 'mail'},
    { title: 'Table',url: '/table', icon: 'mail'},
    { title: 'History',url: '/admin-history', icon: 'mail'},
    { title: 'Draft',url: '/admin-draft', icon: 'mail'},
    { title: 'Prebill',url: '/admin-prebill', icon: 'mail'}



  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
