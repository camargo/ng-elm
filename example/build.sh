#!/bin/bash

npm install
elm-package install
elm make app/Buttons.elm --output=app/buttons.js
npm start
