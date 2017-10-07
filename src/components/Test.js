import React, { Component } from "react"
import * as network from "../api";

import { user, repo } from "./../config"

class Test extends Component {
  render() {
    // CODICE QUI //
    network.getIssues(user, repo)
      .then(console.log)
      .catch(console.error)
    // FINE CODICE //
    return(
      <p style={{"display": "none"}}>{"Stiamo testando per voi =<^.^>="}</p>
    )
  }
}

export default Test
