import React, { Component } from "react"

import { user } from "./../config"

import Repositories from "./Repositories"
import Loader from "./Loader"

import { getRepos } from "./../api"

class Organization extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      fetching: false
    }
  }

  componentDidMount() {
    this.setState({
      fetching: true
    }, () => {
      getRepos(user)
        .then(data => {
          this.setState({
            repos: data,
            fetching: false
          })
        })
    })
  }

  render() {
    const component = [
      <nav className = { "panel" } key = { "org-navbar" }>
        <p className = { "panel-heading" }>
          { user }
        </p>
      </nav>
    ]
    return(
      this.state.fetching ?
        component.concat([<Loader key="org-loader" />]) :
        component.concat([
          <Repositories
            key={"org-repos"}
            repos={this.state.repos}
            user={user}
          />])
    )
  }
}
export default Organization
