import React from "react"
import prettyMs from "pretty-ms"

import Loader from "./Loader"

const AvgIssueClosingTimeCounter = props =>
    <span>
      {"Avg Issue Closing Time: "}
      {
        props.avgIssueClosingTime !== "loading" ?
          typeof props.avgIssueClosingTime !== "number" || Number.isNaN(props.avgIssueClosingTime) ?
            "Data unavailable: too few issues" :
            prettyMs(Math.round(props.avgIssueClosingTime), { "verbose": true })
          :
          <Loader />
      }
    </span>

export default AvgIssueClosingTimeCounter
