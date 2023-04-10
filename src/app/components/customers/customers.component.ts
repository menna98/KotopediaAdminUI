import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  POSTS:any;
  page:number=1;
  count:number=0;
  tablesize:number=12;
  tablesizes:any=[6,12,18,24];

  constructor(private userServ : UsersService){}

  users:any;
  ngOnInit(): void {
    this.userServ.getAllUsers().subscribe(
      {
        next:(res)=>{
          this.users = res;
          console.log(this.users)
        },
        error(err){console.log(err)}
      }
    )
  }

  deleteOne(id:any){
    this.userServ.deleteUserById(id).subscribe({
      next:res=>{
        console.log(res);
        this.userServ.getAllUsers().subscribe({next:(res)=>{this.users = res;}})
      },
      error:error=>{console.log(error);
      }
    })
  }

  getOne(email:any){
    this.userServ.getUserByEmail(email).subscribe({
      next:res=>{
        console.log(res);
        this.users = res;
      },
      error:error=>{console.log(error);
      }
    })
  }

  onTableDataChange(event:any, searchValue:any){
    this.page=event;
    if(searchValue){
      this.getOne(searchValue);
    }
    else{
      this.userServ.getAllUsers().subscribe({
          next:(res)=>{
            this.users = res;
            console.log(this.users)
          },
          error(err){console.log(err)}
        })
    }
  }

  onTableSizeChange(event:any, searchValue:any){
    this.tablesize=event.target.value;
    this.page=1;
    if(searchValue){
      this.getOne(searchValue);
    }
    else{
      this.userServ.getAllUsers().subscribe({
          next:(res)=>{
            this.users = res;
            console.log(this.users)
          },
          error(err){console.log(err)}
        })
    }
  }
}
