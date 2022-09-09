import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from "./book.model";
import {MockData} from "./mock.data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  dataMock = MockData;
  @Input() datas: BookModel[] = [];



  constructor(private  route : Router) {
  }

  ngOnInit(): void {
    this.dataMock.forEach((response: any) => {
      this.datas = [...this.datas, response];

    })
  }

  addComment() {
    this.route.navigate(['comments']);
  }
}
