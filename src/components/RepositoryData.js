import React, { Component } from "react"

import AvgIssueClosingTimeCounter from "./AvgIssueClosingTimeCounter"
import IssuesStatusRatioOverTimeGraph from "./IssuesStatusRatioOverTimeGraph"
import List from "./List"

import {
  getIssues,
  getAvgIssueClosingTime,
  getIssuesStatusRatioOverTime,
  getNoLabelIssues,
  getNoCommentsClosedIssues
} from "./../api"

class RepositoryData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "avgIssueClosingTime": null,
      "fetchingAvgIssueClosingTime": false,
      "issuesStatusRatioOverTime": [],
      "fetchingIssuesStatusRatioOverTime": false,
      "noLabelIssues": [],
      "noCommentsClosedIssues": []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive && !(this.state.avgIssueClosingTime && this.state.issuesStatusRatioOverTime)) {
      this.setState({
        "fetchingAvgIssueClosingTime": true,
        "fetchingIssuesStatusRatioOverTime": true
      })

      getIssues(this.props.user, this.props.name)
        .then(issues => {

          getAvgIssueClosingTime(issues)
            .then(avgIssueClosingTime => {
              this.setState({
                "avgIssueClosingTime": Number.isNaN(avgIssueClosingTime) ?
                  "Data unavailable: too few issues" :
                  avgIssueClosingTime,
                "fetchingAvgIssueClosingTime": false
              })
            })

          getIssuesStatusRatioOverTime(issues)
            .then(issuesStatusRatioOverTime => {
              this.setState({
                "issuesStatusRatioOverTime": issuesStatusRatioOverTime.map(dataPoint => ({
                  "openIssues": dataPoint.openIssues.length,
                  "totalIssues": dataPoint.totalIssues.length,
                  "time": dataPoint.time
                })),
                "fetchingIssuesStatusRatioOverTime": false
              })
            })

          getNoLabelIssues(issues)
            .then(noLabelIssues => {
              this.setState({ noLabelIssues })
            })

          getNoCommentsClosedIssues(issues)
            .then(noCommentsClosedIssues => {
              this.setState({ noCommentsClosedIssues })
            })

        })
    }
  }

  render() {
    return(
      <div style={{"display": this.props.isActive ? "block" : "none", "padding": "10px" }} >
        <ul>
          <AvgIssueClosingTimeCounter
            avgIssueClosingTime = { this.state.avgIssueClosingTime }
            fetching = { this.state.fetchingAvgIssueClosingTime }
          />
        </ul>
        <IssuesStatusRatioOverTimeGraph
          issuesStatusRatioOverTime = { this.state.issuesStatusRatioOverTime }
          fetching = { this.state.fetchingIssuesStatusRatioOverTime }
          style = {{ "padding": "10px"}}
        />
        <List issues = { [] } title = { "No Comments Closed Issues" }/>
        <List issues = { [] } title = { "No Label Issues" }/>
      </div>
    )
  }
}

export default RepositoryData
