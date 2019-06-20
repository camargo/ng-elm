import { Component, OnInit } from '@angular/core';
import { Elm } from './buttons.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  Buttons: any;

  ngOnInit() {
    this.Buttons = Elm.Buttons;
  }
}
