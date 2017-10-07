import React from "react"

import Loader from "./Loader"

const AvgIssueClosingTimeCounter = props =>
    <span>
      {"Avg Issue Closing Time: "}
      {
        props.avgIssueClosingTime !== "loading" ?
          Number.isNaN(props.avgIssueClosingTime) ?
            "Data unavailable: too few issues" :
            props.avgIssueClosingTime
          :
          <Loader />
      }
    </span>

export default AvgIssueClosingTimeCounter
