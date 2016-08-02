# ng-elm

This npm package lets you embed Elm programs in Angular 2 components.<br>
Based off of: https://github.com/evancz/react-elm-components

## Usage

After compiling your Elm program into JavaScript, you can embed it in Angular 2.<br>
This example uses the [Elm buttons example program](http://elm-lang.org/examples/buttons) in an Angular 2 component:

```ts
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
```
