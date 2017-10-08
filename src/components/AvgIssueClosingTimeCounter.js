import React from "react"
import prettyMs from "pretty-ms"

import Loader from "./Loader"

const AvgIssueClosingTimeCounter = ({ avgIssueClosingTime, fetching }) =>
  <div style = {{ textAlign: 'center' }}>
    <span style = {{ fontSize: 'large', textAlign: 'center' }}>
      Avg Issue Closing Time:
      {
        fetching ?
          ' Loading...' :
          ` ${typeof avgIssueClosingTime !== "number" || Number.isNaN(avgIssueClosingTime) ?
            avgIssueClosingTime :
            prettyMs(Math.round(avgIssueClosingTime), { "verbose": true })}`
      }
    </span>
  </div>

export default AvgIssueClosingTimeCounter
