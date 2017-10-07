import React, { Component } from "react"
import * as network from "../network";

import { user, repo } from "./../config"

class Test extends Component {
  render() {
    // CODICE QUI //
    network.getIssues(user, repo)
      .then(network.getAvgIssueClosingTime)
      .then(console.log)
      .catch(console.error)
    // FINE CODICE //
    return(
      <p style={{"display": "none"}}>{"Stiamo testando per voi =<^.^>="}</p>
    )
  }
}

export default Test
