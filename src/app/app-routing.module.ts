import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { CustomersComponent } from './components/customers/customers.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { OrdersComponent } from './components/orders/orders.component';
const routes: Routes = [
  { path: "books", component: BooksComponent },
  { path: "customers", component: CustomersComponent },
  { path: "orders", component: OrdersComponent },
  { path: "feedbacks", component: FeedbacksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
