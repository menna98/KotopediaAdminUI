import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  // private baseUrl = "http://localhost:3000/admin/feedbacks";
  private baseUrl = "https://kotopedia-backend.onrender.com/admin/feedbacks";

  constructor(private myHttpClient : HttpClient) { }

  getAll(){
    return this.myHttpClient.get(this.baseUrl);
  }

  getByTitle(title:any){
    return this.myHttpClient.get(`${this.baseUrl}?title=${title}`);
  }

}
