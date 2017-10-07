import React, { Component } from "react"
import * as network from "../network";

import { name } from "./../config"

class Test extends Component {
  render() {
    // CODICE QUI //
    network.getRepos("italia")
      .then(console.log)
    // FINE CODICE //
    return(
      <p style={{"display": "none"}}>{"Stiamo testando per voi =<^.^>="}</p>
    )
  }
}

export default Test
