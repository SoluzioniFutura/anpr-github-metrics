import React, { Component } from "react"

import Loader from "./Loader"

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
            avgIssueClosingTime
          })
        })
    }
  }

  render() {
    return(
      <p
        style={{"display": this.props.isActive ? "block" : "none" }}
      >
        <span>
          {"Avg Issue Closing Time: "}
          {
            this.state ?
              Number.isNaN(this.state.avgIssueClosingTime) ?
                "Data unavailable: too few issues" :
                this.state.avgIssueClosingTime
              :
              <Loader />
          }
        </span>
      </p>
    )
  }
}

export default RepositoryData
