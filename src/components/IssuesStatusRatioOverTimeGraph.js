import React from "react"

import Loader from "./Loader"
import Chart from './Chart'
import prettyMs from 'pretty-ms'

const IssuesStatusRatioOverTimeGraph = props =>
  <p>
    {
      props.issuesStatusRatioOverTime !== "loading" ?
        <Chart data = { props.issuesStatusRatioOverTime.map(dataPoint => ({
          name: `${new Date(dataPoint.time).getUTCDate()}/${new Date(dataPoint.time).getUTCMonth() + 1}/${new Date(dataPoint.time).getUTCFullYear()}`,
          openIssues: dataPoint.openIssues,
          openIssuesPercentage: dataPoint.openIssues / dataPoint.totalIssues * 100,
          closedIssues: dataPoint.totalIssues - dataPoint.openIssues,
          closedIssuesPercentage: (dataPoint.totalIssues - dataPoint.openIssues) / dataPoint.totalIssues * 100,
          totalIssues: dataPoint.totalIssues
        })) } />:
        <Loader />
    }
  </p>

export default IssuesStatusRatioOverTimeGraph
