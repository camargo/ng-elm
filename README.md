# ng-elm

This package lets you embed [Elm](https://elm-lang.org/) programs inside of [Angular](https://angular.io/) components.<br>
Based off of: [https://github.com/evancz/react-elm-components](https://github.com/evancz/react-elm-components)

## Installation

```bash
npm install ng-elm --save
```

## Example

- Elm Buttons - [Code](https://github.com/camargo/ng-elm/tree/master/example)

## Usage

After compiling your Elm program into JavaScript, you can embed it in Angular.<br>
This example uses the [Elm buttons program](https://guide.elm-lang.org/architecture/buttons.html) :

```ts
import { NgModule, Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgElmModule } from 'ng-elm';
import { Elm } from './buttons.js';

@Component({
  selector: 'my-app',
  template: '<ng-elm [src]="Buttons"></ng-elm>',
})
class AppComponent implements OnInit {
  Buttons: any;

  ngOnInit() {
    this.Buttons = Elm.Buttons;
  }
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, NgElmModule],
})
export class AppModule {}
```

Note that flags (data passed into your Elm program from Angular), and [ports](https://guide.elm-lang.org/interop/ports.html) are also implemented.
