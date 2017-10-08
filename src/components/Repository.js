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
      <a key = { name } onClick = { this.handleClick } className = { 'panel-block is-active columns is-mobile' }>
        <span className = { 'column is-4' }>{ repo.name }</span>
        <span className = { 'column is-offset-4' } style = {{ float: 'right' }}>Open issues: { repo.open_issues_count }</span>
      </a>
      <RepositoryData
        user = { user }
        name = { repo.name }
        isActive = { this.state.isActive }
      />
      </div>
    )
  }
}

export default Repository
