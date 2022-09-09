import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookComponent } from './pages/book/book.component';
import { CommentsComponent } from './pages/comments/comments.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CommentsComponent,
    NavbarComponent,
    ShowcaseComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule ,
      FormsModule ,
      HttpClientModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
