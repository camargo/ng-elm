# ng-elm

This package lets you embed Elm programs inside of Angular 2 components.<br>
Based off of: https://github.com/evancz/react-elm-components

## Installation

```bash
npm install ng-elm --save
```

## Example

- Elm Buttons - [Code](https://github.com/camargo/ng-elm/tree/master/example)

## Usage

After compiling your Elm program into JavaScript, you can embed it in Angular 2.<br>
This example uses the [Elm buttons program](http://elm-lang.org/examples/buttons) :

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
        this.Buttons = require('app/buttons.js').Buttons;
    }
}
```

Note that flags (data passed into your Elm program from Angular), and [ports](http://guide.elm-lang.org/interop/javascript.html) are also implemented.
