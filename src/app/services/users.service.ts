import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private baseUrl = "http://localhost:3000/admin/users";
  private baseUrl = "https://kotopedia-backend.onrender.com/admin/users";

  constructor(private myHttpClient : HttpClient) { }

  getAllUsers():Observable<any>{
    return this.myHttpClient.get(this.baseUrl);
  }

  getUserByEmail(email:string){
    return this.myHttpClient.get(this.baseUrl+`/${email}`);
  }


  deleteUserById(id:string){
    return this.myHttpClient.delete(this.baseUrl+`/${id}`);
  }

  // deleteAllUsers(){
  //   return this.myHttpClient.delete(this.baseUrl);
  // }
}
