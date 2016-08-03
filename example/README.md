# ng-elm example app

This is a basic Angular 2 app that uses ng-elm. 
It was setup using the [Angular 2 Quickstart](https://angular.io/docs/ts/latest/quickstart.html).

## Build Instructions

To get this up and running first you need [Git](https://git-scm.com/), [Node.js](https://nodejs.org/), and [Elm](http://elm-lang.org/install) installed.<br>

Then type the following commands:

```bash
git clone https://github.com/camargo/ng-elm.git
cd ng-elm/example
npm install
cd ng-elm/example/app
elm make Buttons.elm --output=buttons.js
cd ng-elm/example
npm start
```
