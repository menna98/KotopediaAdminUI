import { Component, OnInit } from '@angular/core';
import { FeedbacksService } from 'src/app/services/feedbacks.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  POSTS:any;
  page:number=1;
  count:number=0;
  tablesize:number=6;
  tablesizes:any=[3,6,9,12];

  feedbacksToShow:any = [];

  constructor(private feedbackServ:FeedbacksService){}

  ngOnInit(): void {

      this.feedbackServ.getAll().subscribe({
        next:res=>{ this.feedbacksToShow = res; },
        error:error=>{ console.log(error); }
      });

  }

  search(title:any){
    this.feedbackServ.getByTitle(title).subscribe({
      next:res=>{ this.feedbacksToShow = res; },
      error:error=>{ console.log(error); }
    });
  }

  onTableDataChange(event:any,searchValue:any){
    this.page=event;
    if(searchValue){
      this.search(searchValue);
    }
    else{
      this.feedbackServ.getAll().subscribe({
        next:res=>{ this.feedbacksToShow = res; },
        error:error=>{ console.log(error); }
      })
    }
  }

  onTableSizeChange(event:any,searchValue:any){
    this.tablesize=event.target.value;
    this.page=1;
    if(searchValue){
      this.search(searchValue);
    }
    else{
      this.feedbackServ.getAll().subscribe({
        next:res=>{ this.feedbacksToShow = res; },
        error:error=>{ console.log(error); }
      })
    }
  }
}
