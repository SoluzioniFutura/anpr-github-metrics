import React from "react"

import Organization from "./Organization"
import Test from "./Test"

import { user } from "./../config"

const App = () =>
  [
    <Organization key={"organization"} name={user} />,
    <Test key={"test"} />
  ]

export default App
