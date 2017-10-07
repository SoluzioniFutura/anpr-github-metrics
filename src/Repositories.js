import React, { Component } from "react"

import GitHub from "github-api"

const gh = new GitHub()

class Repositories extends Component {

  componentDidMount() {
    gh.getUser("vforvalerio87").listRepos()
      .then(response => {
        this.setState({"repos": response.data})
      })
  }

  render() {
    if (this.state && this.state.repos) {
      return this.state.repos.map(repo => <p key={repo.name}>{repo.name}</p>)
    } else {
      return <p>{"Loading..."}</p>
    }
  }
}

export default Repositories
