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
      <div>{"\n        "}<a key = { name } className = { `panel-block ${this.state.isActive ? "is-active" : ""}` } onClick = { this.handleClick }>{"\n          "}<span className = { "panel-icon" }>{"\n            "}<a href = { repo.html_url } target = { "_blank" }>{"\n              "}<i className = { "fa fa-external-link" } />{"\n            "}</a>{"\n          "}</span>{"\n          "}<span onClick = { null }>{ repo.name }{" (Open issues: "}{ repo.open_issues_count }{")"}</span>{"\n        "}</a>{"\n      "}<RepositoryData
        user = { user }
        name = { repo.name }
        isActive = { this.state.isActive }
      />{"\n      "}</div>
    )
  }
}

export default Repository
