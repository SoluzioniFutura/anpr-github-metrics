import React, { Component } from "react"

import { user } from "./../config"

import Repositories from "./Repositories"
import Loader from "./Loader"

import { getRepos } from "./../api"

class Organization extends Component {

  // C'È DA AGGIUNGERE UN CATCH, CON RELATIVO ERROR DISPLAY
  componentDidMount() {
    getRepos(user)
      .then(data => { this.setState({"repos": data}) })
  }

  render() {
    const component = [<h1 key={"title"}>{user}</h1>]
    return(
      this.state && this.state.repos ? component.concat([<Repositories key={"repos"} repos={this.state.repos} />]) : component.concat([<Loader key="loader" />])
    )
  }
}
export default Organization
