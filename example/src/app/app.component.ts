import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  Buttons: any;
  title = 'ng-elm';

  ngOnInit() {
    // @ts-ignore
    this.Buttons = require('src/app/buttons.js').Elm.Buttons;
  }
}
