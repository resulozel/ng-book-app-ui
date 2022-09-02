import { Component, OnInit } from '@angular/core';
import {MockData} from "../book/mock.data";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  globalSearch =MockData;
  name: any;
  newName: any;
  constructor() { }

  ngOnInit(): void {
    this.newName=this.globalSearch[0].name
    this.globalSearch = [];
  }

  searchFilter() {
    if (this.newName !== '') {
      this.globalSearch = this.globalSearch.filter(res => {
        return res.name.toLowerCase().match(this.newName.toLowerCase());
      });
    } else if (this.newName === '') {
      this.ngOnInit();
    }
  }
}
