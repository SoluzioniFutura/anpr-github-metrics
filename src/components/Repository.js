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
<<<<<<< HEAD
      <a key = { this.props.name } onClick = { this.handleClick } className = { 'panel-block is-active columns is-mobile' }>
        <span className = { 'column is-4' }>{ this.props.data.name }</span>
        <span className = { 'column is-offset-4' } style = {{ float: 'right' }}>Open issues: { this.props.data.open_issues_count }</span>
      </a>
=======
        <p
          style={{"cursor": "pointer"}}
          onClick={this.handleClick}
        >
          <span style={{"marginRight": "20px"}}>
            { this.props.data.name }
          </span>
          <span>{"Open issues: "}{ this.props.data.open_issues_count }</span>
        </p>
>>>>>>> f4f9f7335195e8099846c660503b6080a73df24d
        <RepositoryData
          user = { this.props.user }
          name = { this.props.data.name }
          isActive = { this.state.isActive }
        />
      </div>
    )
  }
}

export default Repository
