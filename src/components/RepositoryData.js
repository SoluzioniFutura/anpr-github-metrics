import React, { Component } from "react"

import AvgIssueClosingTimeCounter from "./AvgIssueClosingTimeCounter"

import {
  getIssues,
  getAvgIssueClosingTime
} from "./../api"

class RepositoryData extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive && !this.state) {
      getIssues(this.props.user, this.props.name)
        .then(getAvgIssueClosingTime)
        .then(avgIssueClosingTime => {
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
