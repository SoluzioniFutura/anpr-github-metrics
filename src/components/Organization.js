import React, { Component } from "react"

import GitHub from "github-api"

import { user } from "./../config"

import Repositories from "./Repositories"
import Loader from "./Loader"

const gh = new GitHub()

class Organization extends Component {

  componentDidMount() {
    gh.getUser(user).listRepos()
      .then(response => {
        this.setState({"repos": response.data})
      })
  }

  render() {
    const component = [<h1 key={"title"}>{user}</h1>]
    return(
      this.state && this.state.repos ? component.concat([<Repositories key={"repos"} repos={this.state.repos} />]) : component.concat([<Loader key="loader" />])
    )
  }
}
export default Organization
