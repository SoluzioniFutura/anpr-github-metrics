import React from "react"

import Repositories from "./Repositories"

const Organization = props => [
  <nav className = { 'navbar' }>
    <div>
      <h1 className = { 'title is-1'}>
        { props.name }
      </h1>
      <a className = { 'button edit-button' }>
        Edit
      </a>
    </div>
    <input type = { 'text' } className = { 'input filter' } />
  </nav>,
  <Repositories key = { 'repos' } />
]

export default Organization
