import React, { Component } from "react"

import AvgIssueClosingTimeCounter from "./AvgIssueClosingTimeCounter"

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
          console.log("issuesStatusRatioOverTime", issuesStatusRatioOverTime)
          this.setState({
            "avgIssueClosingTime": Number.isNaN(avgIssueClosingTime) ?
              "Data unavailable: too few issues" :
              avgIssueClosingTime
          })
        })
    }
  }

  render() {
    return(
      <p style={{"display": this.props.isActive ? "block" : "none" }}>
        {
          <AvgIssueClosingTimeCounter
            avgIssueClosingTime={this.state && this.state.avgIssueClosingTime ? this.state.avgIssueClosingTime : "loading"}
          />
        }
      </p>
    )
  }
}

export default RepositoryData
