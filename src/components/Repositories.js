import React from "react"

import Repository from "./Repository"
import Filter from "./Filter"

const Repositories = ({ user, repos }) => [
  <Filter key={ "repos-filter" } style = {{ margin: "10px" }}/>,
  ...repos.map(repo =>
      <Repository
        repo={ repo }
        user={ user }
      />
  )
]

export default Repositories
