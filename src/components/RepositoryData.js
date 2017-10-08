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
      "noCommentsClosedIssues": [],
      "fetchingNoLabelIssues": false,
      "fetchingNoCommentsClosedIssues": false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive && !(this.state.avgIssueClosingTime && this.state.issuesStatusRatioOverTime)) {
      this.setState({
        "fetchingAvgIssueClosingTime": true,
        "fetchingIssuesStatusRatioOverTime": true,
        "fetchingNoLabelIssues": true,
        "fetchingNoCommentsClosedIssues": true
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
              this.setState({
                noLabelIssues,
                "fetchingNoLabelIssues": false
              })
              console.log("noLabel", noLabelIssues)
            })

          getNoCommentsClosedIssues(issues)
            .then(noCommentsClosedIssues => {
              this.setState({
                noCommentsClosedIssues,
                "fetchingNoCommentsClosedIssues": false
              })
              console.log("noComments", noCommentsClosedIssues)
            })

        })
    }
  }

  render() {
    return(
      <div style={{"display": this.props.isActive ? "block" : "none", "padding": "10px" }} >
        <ul>
          <a
            className = { "button is-primary is-outlined is-fullwidth" }
            style = {{ "width": "80%", "margin": "0 10%" }}
            href = { this.props.repo.html_url }
            target = { "_blank" }
          >
            Go to repo
          </a>
          <List fetching = { this.state.fetchingNoCommentsClosedIssues } issues = { this.state.noCommentsClosedIssues } title = { "Closed issues with no comments" } />
          <List fetching = { this.state.fetchingNoLabelIssues } issues = { this.state.noLabelIssues } title = { "Issues with no label" } />
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
      </div>
    )
  }
}

export default RepositoryData
