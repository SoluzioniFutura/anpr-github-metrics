import React from "react"

import Repository from "./Repository"

const Repositories = ({ user, repos }) =>
  repos.map(repo =>
      <Repository
        repo={ repo }
        user={ user }
      />
  )

export default Repositories
