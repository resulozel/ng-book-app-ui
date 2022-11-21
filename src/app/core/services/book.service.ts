import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookModel} from "../models/book-model/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {
 public bookUrl : string = "https://jsonplaceholder.typicode.com/users";

  constructor(private  http: HttpClient) { }


  getBook(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.bookUrl)
  }

}
