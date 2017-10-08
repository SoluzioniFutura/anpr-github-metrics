import React from "react"
import prettyMs from "pretty-ms"

import Loader from "./Loader"

const AvgIssueClosingTimeCounter = props =>
  <div style = {{ textAlign: 'center' }}>
    <span style = {{ fontSize: 'large', textAlign: 'center' }}>
      Avg Issue Closing Time:
      {
        props.avgIssueClosingTime ?
          typeof props.avgIssueClosingTime !== "number" || Number.isNaN(props.avgIssueClosingTime) ?
            "Data unavailable: too few issues" :
            prettyMs(Math.round(props.avgIssueClosingTime), { "verbose": true })
          :
          <Loader />
      }
    </span>
  </div>

export default AvgIssueClosingTimeCounter
