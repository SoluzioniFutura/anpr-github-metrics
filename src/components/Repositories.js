import React from "react"

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
          {this.state.repos.map(repo => <li key={repo.name} className={'repo'}><Repository data={repo}/></li>)}
        </ul>
      )
    }
  }
}

export default Repositories
