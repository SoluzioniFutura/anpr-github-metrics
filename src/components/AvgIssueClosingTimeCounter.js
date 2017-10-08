import React from "react"
import prettyMs from "pretty-ms"

import Loader from "./Loader"

const AvgIssueClosingTimeCounter = ({ avgIssueClosingTime }) =>
    <span>
      {"Avg Issue Closing Time: "}
      {
        avgIssueClosingTime !== "loading" ?
          typeof avgIssueClosingTime !== "number" || Number.isNaN(avgIssueClosingTime) ?
            "Data unavailable: too few issues" :
            prettyMs(Math.round(avgIssueClosingTime), { "verbose": true })
          :
          <Loader />
      }
    </span>

export default AvgIssueClosingTimeCounter
