import React from "react"

import Organization from "./Organization"

import { user } from "./../config"

const App = () =>
  <Organization name={user} />

export default App
