import React from 'react'

const Header = ({ filterFunc, user }) => (
  <nav className = { 'panel navbar' } key = { 'org-navbar' }>
    <p className = { 'panel-heading title' } style = {{ border: 'none', margin: '0' }}>
      { user }
    </p>
    <p className = { 'control has-icons-left' } style = {{ margin: '1px', width: '45%' }}>
      <input className = { 'input is-small' } type = { 'text' } placeholder = { 'search' } onChange = {(e) => {
        e.preventDefault()
        filterFunc(e.target.value)
      } }/>
      <span className = { 'icon is-small is-left' }>
        <i className = { 'fa fa-search' }/>
      </span>
    </p>
  </nav>
)

export default Header
