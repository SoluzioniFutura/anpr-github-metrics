import React, { Component } from "react"

import { user } from "./../config"

import Repositories from "./Repositories"
import Loader from "./Loader"

import { getRepos } from "./../api"

class Organization extends Component {
  componentDidMount() {
    getRepos(user)
      .then(data => { this.setState({"repos": data}) })
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
      this.state && this.state.repos ?
      component.concat([
        <Repositories
          key={"org-repos"}
          repos={this.state.repos}
          user={user}
        />]) :
      component.concat([<Loader key="org-loader" />])
    )
  }
}
export default Organization
