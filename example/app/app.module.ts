import { NgModule, Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgElmModule } from 'ng-elm';

@Component({
  selector: 'my-app',
  template: '<ng-elm [src]="Buttons"></ng-elm>'
})
class AppComponent implements OnInit {
  public Buttons: any;

  ngOnInit() {
    this.Buttons = require('app/buttons.js').Buttons;
  }
}

@NgModule({
  imports:      [ BrowserModule, NgElmModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
