import React, { Component } from "react"

import GitHub from "github-api"

import { user } from "./../config"

const gh = new GitHub()

class Repositories extends Component {

  componentDidMount() {
    gh.getUser(user).listRepos()
      .then(response => {
        this.setState({"repos": response.data})
      })
  }

  render() {
    if (this.state && this.state.repos) {
      return (
        <ul>
          { this.state.repos.map(repo => <li key={repo.name}>{repo.name}</li>) }
        </ul>
      )
    } else {
      return <p>{"Loading..."}</p>
    }
  }
}

export default Repositories
