import React, { Component } from "react"
import * as network from "../network";

import { user, repo } from "./../config"

class Test extends Component {
  render() {
    // CODICE QUI //
    network.getRepos(user)
      .then(console.log)
    // FINE CODICE //
    return(
      <p style={{"display": "none"}}>{"Stiamo testando per voi =<^.^>="}</p>
    )
  }
}

export default Test
