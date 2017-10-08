import React from "react"
import prettyMs from "pretty-ms"

const AvgIssueClosingTimeCounter = ({ avgIssueClosingTime, fetching }) =>
  <li style = {{ "textAlign": "center" }}>{"\n    "}<span style = {{ "fontSize": "medium", "textAlign": "center" }}>{"\n      Avg Issue Closing Time:\n      "}{
        fetching ?
          " Loading..." :
          ` ${typeof avgIssueClosingTime !== "number" || Number.isNaN(avgIssueClosingTime) ?
            avgIssueClosingTime :
            prettyMs(Math.round(avgIssueClosingTime), { "verbose": true })}`
      }{"\n    "}</span>{"\n  "}</li>

export default AvgIssueClosingTimeCounter
