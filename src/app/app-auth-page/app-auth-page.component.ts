import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-auth-page',
  templateUrl: './app-auth-page.component.html',
  styleUrls: ['./app-auth-page.component.css']
})
export class AppAuthPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    ///location.href = "http://localhost:4200/Space-Dashboard?code=fgfhgjhgfdvfbvfbgfhnmjm"
  }

  Login()
  {
    location.href = "http://localhost:4200/Space-Dashboard?code=fgfhgjhgfdvfbvfbgfhnmjm"
  }

}
