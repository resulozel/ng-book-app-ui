import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BookComponent} from "./pages/book/book.component";
import {CommentsComponent} from "./pages/comments/comments.component";

const routes : Routes = [
  {
    path: '',
    component : BookComponent,
    pathMatch: 'full',
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'comments',
    component: CommentsComponent ,
  },

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
