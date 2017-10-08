import React from "react"

import Repository from "./Repository"
import Filter from "./Filter"

const Repositories = ({ user, repos }) => [
  <Filter key={ "repos-filter" } style = {{ margin: "10px" }}/>,
  <ul key={ "repos-ul" }>
    {
      repos.map(repo =>
        <li key={ `repos-${repo.name}` }>
          <Repository
            repo={ repo }
            user={ user }
          />
        </li>
      )
    }
  </ul>
]

export default Repositories
