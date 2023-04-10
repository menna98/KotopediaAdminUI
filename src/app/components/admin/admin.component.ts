import { Token } from '@angular/compiler';
import { Component, DoCheck, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {

  loader=true;
  token:any = "";

  constructor(){
    this.token = document.cookie.split('=')[1];
    console.log(this.token);
  }

  ngOnInit(): void {
    if(!this.token){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Unauthorized access! Invalid token!',
        timer: 2000
      })
      this.logout();
    }
  }

  logout(){
    const date = new Date(2023,1,1);
    document.cookie = `token=${this.token};expires=${date}`;
    this.token = "";
    setTimeout(function(){location.replace("http://localhost:4201/home")},2000);
  }
  
}
