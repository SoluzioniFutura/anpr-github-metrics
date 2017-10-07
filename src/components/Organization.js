import React from "react"

import Repositories from "./Repositories"

const Organization = props =>
  <div>
    <h1>{props.name}</h1>
    <Repositories />
  </div>

export default Organization
