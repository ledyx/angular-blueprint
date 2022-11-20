import { Component, OnInit } from '@angular/core';
import * as dateFns from "date-fns";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  header = ["Email", "Name", "Department", "Sign up date"];
  body?: {
    email: string,
    name: string,
    department: string,
    date: Date
  }[];

  ngOnInit(): void {
    this.body = [...Array(20).keys()].map(_ => ({ email: "aaa@bbb.ccc", name: "Jone Doe", department: "R&D", date: new Date() }));
  }

  formatDate(date: Date) {
    return dateFns.format(date, "yyyy-MM-dd hh:mm:ss");
  }
}
