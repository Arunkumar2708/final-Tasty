import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BackendworkService {

  constructor(private http: HttpClient) { }
  base_url: string = 'https://techdriveners.com/tastydots_old/api/';
  image_url = 'https://techdriveners.com/tastydots_old/public/uploads/images/';
  data: any;
  setData(data: any) {
    this.data = data;
  }
  getImageUrl() {
    return this.image_url;
  }
  getData() {
    return this.data;
  }

  getAllCategory(data: any) {
    return this.http.post(this.base_url + "getAllCategory", data);
  }

  addCategory(data: any): Observable<any> {
    return this.http.post(this.base_url + "addCategory", data);
  }

  updateCategory(data: any): Observable<any> {
    return this.http.post(this.base_url + "updateCategory", data);
  }

  deleteCategory(data: any): Observable<any> {
    return this.http.post(this.base_url + "deleteCategory", data);
  }
  addSubCategory(data: any): Observable<any> {
    return this.http.post(this.base_url + "addSubCategory", data);
  }

  getAllSubCategory(data: any): Observable<any> {
    return this.http.post(this.base_url + "getAllSubCategory", data);
  }

  deleteSubCategory(data: any): Observable<any> {
    return this.http.post(this.base_url + "deleteSubCategory", data);
  }

  updateSubCategory(data: any): Observable<any> {
    return this.http.post(this.base_url + "updateSubCategory", data);
  }
  getSubCategoryForOrder(data: any) {
    return this.http.post(this.base_url + "getSubCategoryForOrder", data);
  }

  placeOrder(data: any): Observable<any>{
    return this.http.post(this.base_url + "placeOrder", data);
  }

  updateOrderItems(data: any): Observable<any>{
    return this.http.post(this.base_url + "updateOrderItems", data);
  }

  checkOrderForDineInTable(data: any): Observable<any>{
    return this.http.post(this.base_url + "checkOrderForDineInTable", data);
  }

  updatePaymentType(data: any): Observable<any>{
    return this.http.post(this.base_url + "updatePaymentType", data);
  }

  getOrderDetails(data: any) : Observable<any>{
    return this.http.post(this.base_url + "getOrderDetails", data);
  }

  updateOrderStatus(data: any): Observable<any>{
    return this.http.post(this.base_url + "updateOrderStatus", data);
  }

  getOrdersByStatus(data: any) : Observable<any>{
    return this.http.post(this.base_url + "getOrdersByStatus", data);
  }

  updateDineInTableCount(data: any) : Observable<any>{
    return this.http.post(this.base_url + "updateDineInTableCount", data);
  }

  getDineInTableCount(data: any) : Observable<any>{
    return this.http.post(this.base_url + "getDineInTableCount", data);
  }

  getCompletedHistory(data: any) : Observable<any>{
    return this.http.post(this.base_url + "getCompletedHistory", data);
  }
}
