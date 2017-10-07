import React from "react"

import Loader from "./Loader"

const IssuesStatusRatioOverTimeGraph = props =>
  <p>
    {
      props.issuesStatusRatioOverTime !== "loading" ?
        props.issuesStatusRatioOverTime.map(dataPoint => dataPoint.time + ": " + dataPoint.openIssues + "/" + dataPoint.totalIssues + " ") :
        <Loader />
    }
  </p>

export default IssuesStatusRatioOverTimeGraph
