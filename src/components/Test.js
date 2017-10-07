import React, { Component } from "react"
import * as network from "../api";

import { user, repo } from "./../config"

class Test extends Component {
  render() {
    // CODICE QUI //
    network.getIssues(user, repo)
      .then(issues => {
        return network.getIssuesStatusRatioOverTime(
          issues,
          new Date("October 13, 2017 11:13:00"),
          new Date("November 13, 2017 11:13:00"),
          24
        )
      })
      .then(console.log)
      .catch(console.error)
    // FINE CODICE //
    return(
      <p style={{"display": "none"}}>{"Stiamo testando per voi =<^.^>="}</p>
    )
  }
}

export default Test
