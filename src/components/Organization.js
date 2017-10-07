import React from "react"

import Repositories from "./Repositories"

const Organization = props => [
  <h1 key={"title"}>{props.name}</h1>,
  <Repositories key={"repos"} />
]

export default Organization
