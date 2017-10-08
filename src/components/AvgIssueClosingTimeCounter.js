import React from "react"
import prettyMs from "pretty-ms"

const AvgIssueClosingTimeCounter = ({ avgIssueClosingTime, fetching }) =>
  <li style = {{ "textAlign": "center", "margin": "2% 10%" }}>
    <div className = { "card" }>
      <header className = { "card-header" }>
        <p className = { "card-header-title" }>
          Avg Issue Closing Time
        </p>
      </header>
      <div className = { "card-content" }>
        <div className = { "content" }>
          {
            fetching ?
              " Loading..." :
              ` ${typeof avgIssueClosingTime !== "number" || Number.isNaN(avgIssueClosingTime) ?
                avgIssueClosingTime :
                prettyMs(Math.round(avgIssueClosingTime), { "verbose": true })}`
          }
        </div>
      </div>
    </div>
  </li>

export default AvgIssueClosingTimeCounter
