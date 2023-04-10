import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private baseUrl = "http://localhost:3000/admin/products";
  private baseUrl = "https://kotopedia-backend.onrender.com/admin/products";

  constructor(private myHttpClient : HttpClient) { }

  addNewProduct(productInfo:object){
    return this.myHttpClient.post(this.baseUrl, productInfo);
  }

  updateProduct(productUpdate:object){
    return this.myHttpClient.patch(this.baseUrl, productUpdate);
  }

  getAllProducts():Observable<any>{
    return this.myHttpClient.get(this.baseUrl);
  }

  getProductsByCategory(category:string){
    return this.myHttpClient.get(this.baseUrl+`/${category}`);
  }

  deleteAllProducts(){
    return this.myHttpClient.delete(this.baseUrl);
  }

  deleteProductById(id:string){
    return this.myHttpClient.delete(this.baseUrl+`/${id}`);
  }

}
