import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mobile = false;

  constructor() { }

  ngOnInit(): void {
  if (window.screen.width <= 480) {
    this.mobile = true;
  }
  }

}
