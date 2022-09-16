import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from "../../core/models/book-model/book.model";
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
  isHidden = true;
  limit = 0;
  dataLength = 0;
  size = 6;




  constructor(private  route : Router) {

  }

  ngOnInit(): void {
    this.dataLength = this.dataMock.length;
    console.log(this.dataLength)
    this.dataMock.forEach((response: any) => {
      this.datas = [...this.datas, response];

    })
  }

  addComment() {
    this.route.navigate(['comments']);
  }

  viewMore(num : number) {
    this.size= this.size + num;


  }
}
