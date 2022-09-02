import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BookComponent} from "./components/book/book.component";
import {CommentsComponent} from "./components/comments/comments.component";

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
