import React from "react"

import Repository from "./Repository"

const Repositories = props =>
  <ul>
    {
      props.repos.map(repo =>
        <li key={ repo.name }>
          <Repository
            data={ repo }
            user={ props.user }
          />
        </li>
      )
    }
  </ul>

export default Repositories
