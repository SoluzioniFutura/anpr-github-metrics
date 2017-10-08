import React, { Component } from "react"

import RepositoryData from "./RepositoryData"

class Repository extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      "isActive": false
    }
  }

  handleClick() {
    this.setState({
      "isActive": !this.state.isActive
    })
  }

  render() {
    const { name, repo, user } = this.props
    return(
      <div>
        <a key = { name } className = { `panel-block ${this.state.isActive ? "is-active" : ""}` } onClick = { this.handleClick }>
          <span className = { "panel-icon" }>
            <i className = { "fa fa-book" }/>
          </span>
          <span>{ repo.name } (Open issues: { repo.open_issues_count })</span>
        </a>
        <RepositoryData
          repo = { repo }
          user = { user }
          name = { repo.name }
          isActive = { this.state.isActive }
        />
      </div>
    )
  }
}

export default Repository
