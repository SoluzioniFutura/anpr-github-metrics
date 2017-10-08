import React from 'react'

const Filter = () => (
  <div className = { 'panel-block' }>
    <p className = { 'control has-icons-left' }>
      <input className = { 'input is-small' } type = { 'text' } placeholder = { 'search' }/>
      <span className = { 'icon is-small is-left' }>
        <i className = { 'fa fa-search' }/>
      </span>
    </p>
  </div>
)

export default Filter
