import React, { Component } from "react"

import GitHub from "github-api"

import { user } from "./../config"

import Repository from "./Repository"

const gh = new GitHub()

class Repositories extends Component {

  componentDidMount() {
    gh.getUser(user).listRepos()
      .then(response => {
        console.log(response)
        this.setState({"repos": response.data})
      })
  }

  render() {
    if (this.state && this.state.repos) {
      return (
        <ul>
          { this.state.repos.map(repo => <li key={ repo.name }><Repository data={ repo } /></li>) }
        </ul>
      )
    } else {
      return <p>{"Loading..."}</p>
    }
  }
}

export default Repositories
