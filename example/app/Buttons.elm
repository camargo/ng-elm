port module Buttons exposing (main)

import Html exposing (Html, div, button, text)
import Html.Events exposing (onClick)

-- Main.

main =
  Html.beginnerProgram
    { model = 0
    , view = view
    , update = update
    }

-- Model.

type alias Model = Int

model : Model
model =
  0

-- Update.

type Msg
  = Increment
  | Decrement

update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment ->
      model + 1

    Decrement ->
      model - 1

-- View.

view : Model -> Html Msg
view model =
  div []
    [ button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (toString model) ]
    , button [ onClick Increment ] [ text "+" ]
    ]
