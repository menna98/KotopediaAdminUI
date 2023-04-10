import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // private baseUrl = "http://localhost:3000/admin/orders";
  private baseUrl = "https://kotopedia-backend.onrender.com/admin/orders";

  constructor(private myHttpClient : HttpClient) { }

  updateOrderStatus(orderID:string,status:string){
    return this.myHttpClient.patch(this.baseUrl,{orderID,status});
  }

  getAllOrders(){
    return this.myHttpClient.get(this.baseUrl);
  }

  getOrdersByStatus(status:any){
    return this.myHttpClient.get(`${this.baseUrl}/${status}`);
  }
}
