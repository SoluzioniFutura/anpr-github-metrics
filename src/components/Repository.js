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
    return(
      <div>
        <p
          style={{"cursor": "pointer"}}
          onClick={this.handleClick}
        >
          <span style={{"marginRight": "20px"}}>
            { this.props.data.name }
          </span>
          {
            <span>{"Open issues: "}{ this.props.data.open_issues_count }</span>
          }
        </p>
        <RepositoryData
          name={this.props.data.name}
          isActive={this.state.isActive}
        />
      </div>
    )
  }
}

export default Repository
