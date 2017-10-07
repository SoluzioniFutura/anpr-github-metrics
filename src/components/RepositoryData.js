import React, { Component } from "react"

import AvgIssueClosingTimeCounter from "./AvgIssueClosingTimeCounter"
import IssuesStatusRatioOverTimeGraph from "./IssuesStatusRatioOverTimeGraph"

import {
  getIssues,
  getAvgIssueClosingTime,
  getIssuesStatusRatioOverTime
} from "./../api"

class RepositoryData extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive && !this.state) {
      getIssues(this.props.user, this.props.name)
        .then(issues => Promise.all([
          getAvgIssueClosingTime(issues),
          getIssuesStatusRatioOverTime(issues)
        ]))
        .then(([avgIssueClosingTime, issuesStatusRatioOverTime]) => {
          console.log(issuesStatusRatioOverTime)
          this.setState({
            "avgIssueClosingTime": Number.isNaN(avgIssueClosingTime) ? "Data unavailable: too few issues" : avgIssueClosingTime,
            "issuesStatusRatioOverTime": issuesStatusRatioOverTime.map(dataPoint => ({
              "openIssues": dataPoint.openIssues.length,
              "totalIssues": dataPoint.totalIssues.length,
              "time": dataPoint.time
            }))
          })
        })
    }
  }

  render() {
    return(
      <div style={{"display": this.props.isActive ? "block" : "none" }}>
        {
          <AvgIssueClosingTimeCounter
            avgIssueClosingTime={this.state && this.state.avgIssueClosingTime ? this.state.avgIssueClosingTime : "loading"}
          />
        }
        {
          <IssuesStatusRatioOverTimeGraph
            issuesStatusRatioOverTime={
              this.state && this.state.issuesStatusRatioOverTime ?
                this.state.issuesStatusRatioOverTime :
                "loading"
            }
          />
        }
      </div>
    )
  }
}

export default RepositoryData
