import { Component, OnInit } from '@angular/core';
import { NgElmComponent } from 'ng-elm';

@Component({
  selector: 'my-app',
  directives: [
    NgElmComponent
  ],
  template: '<ng-elm [src]="Buttons"></ng-elm>'
})
export class AppComponent implements OnInit {
    public Buttons: any;

    ngOnInit() {
        this.Buttons = require('buttons.js').Buttons;
    }
}
