import React from "react"

import Organization from "./Organization"
import Test from "./Test"

import { user } from "./../config"

const App = () =>
  [
    <Organization key={"app-organization"} name={user} />,
    <Test key={"app-test"} />
  ]

export default App
