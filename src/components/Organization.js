import React, { Component } from "react"

import { user } from "./../config"

import Repositories from "./Repositories"
import Loader from "./Loader"
import Header from "./Header"

import { getRepos } from "./../api"

class Organization extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "repos": [],
      "fetching": false
    }
    this.fullRepos = []
    this._filterByName = this._filterByName.bind(this)
  }

  _filterByName(filter) {
    setTimeout(() => {
      this.setState({
        "repos": this.fullRepos.filter((repo) => repo.name.indexOf(filter) !== -1)
      })
    }, 200)
  }

  componentDidMount() {
    this.setState({
      "fetching": true
    }, () => {
      getRepos(user)
        .then(data => {
          this.fullRepos = data
          this.setState({
            "repos": data,
            "fetching": false
          })
        })
    })
  }

  render() {
    const component = [
      <Header filterFunc = { this._filterByName } user = { user }/>
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
