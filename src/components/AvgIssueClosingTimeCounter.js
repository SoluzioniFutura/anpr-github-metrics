import React from "react"
import prettyMs from "pretty-ms"

import Loader from "./Loader"

const AvgIssueClosingTimeCounter = ({ avgIssueClosingTime, fetching }) =>
  <li style = {{ textAlign: 'center' }}>
    <span style = {{ fontSize: 'medium', textAlign: 'center' }}>
      Avg Issue Closing Time:
      {
        fetching ?
          ' Loading...' :
          ` ${typeof avgIssueClosingTime !== "number" || Number.isNaN(avgIssueClosingTime) ?
            avgIssueClosingTime :
            prettyMs(Math.round(avgIssueClosingTime), { "verbose": true })}`
      }
    </span>
  </li>

export default AvgIssueClosingTimeCounter
