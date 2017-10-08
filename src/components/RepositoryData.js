import React, { Component } from "react"

import AvgIssueClosingTimeCounter from "./AvgIssueClosingTimeCounter"
import IssuesStatusRatioOverTimeGraph from "./IssuesStatusRatioOverTimeGraph"

import {
  getIssues,
  getAvgIssueClosingTime,
  getIssuesStatusRatioOverTime
} from "./../api"

class RepositoryData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avgIssueClosingTime: null,
      issuesStatusRatioOverTime: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive && !(this.state.avgIssueClosingTime && this.state.issuesStatusRatioOverTime)) {

      getIssues(this.props.user, this.props.name)
        .then(issues => {

          getAvgIssueClosingTime(issues)
            .then(avgIssueClosingTime => {
              this.setState({
                "avgIssueClosingTime": Number.isNaN(avgIssueClosingTime) ?
                  "Data unavailable: too few issues" :
                  avgIssueClosingTime
              })
            })

          getIssuesStatusRatioOverTime(issues)
            .then(issuesStatusRatioOverTime => {
              this.setState({
                "issuesStatusRatioOverTime": issuesStatusRatioOverTime.map(dataPoint => ({
                  "openIssues": dataPoint.openIssues.length,
                  "totalIssues": dataPoint.totalIssues.length,
                  "time": dataPoint.time
                }))
              })
            })

      })
    }
  }

  render() {
    return(
      <div style={{"display": this.props.isActive ? "block" : "none" }} >
        <AvgIssueClosingTimeCounter
          avgIssueClosingTime = { this.state.avgIssueClosingTime }
        />
        <IssuesStatusRatioOverTimeGraph
          issuesStatusRatioOverTime = {
            this.state.issuesStatusRatioOverTime ?
              this.state.issuesStatusRatioOverTime :
              'loading'
          }
          style = {{ padding: '10px'}}
        />
      </div>
    )
  }
}

export default RepositoryData
