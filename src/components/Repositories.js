import React from "react"

import Repository from "./Repository"
import Filter from './Filter'

const Repositories = props => [
  <Filter key={ "repos-filter" } style = {{ margin: '10px' }}/>,
  <ul key={ "repos-ul" }>
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
]

export default Repositories
