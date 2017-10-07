import React, { Component } from "react"
import * as network from "../network";

class Test extends Component {
  render() {
    // CODICE QUI //
    network.getRepos("italia")
      .then(console.log)
    // FINE CODICE //
    return(
      <p>{"Stiamo testando per voi =<^.^>="}</p>
    )
  }
}

export default Test
