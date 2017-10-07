import React from "react"

import Organization from "./Organization"
import Test from "./Test"

import { user } from "./../config"

const App = () =>
  [
    <Organization name={user} />,
    <Test />
  ]

export default App
