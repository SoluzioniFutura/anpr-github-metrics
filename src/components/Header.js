import React from "react"

const Header = ({ filterFunc, user }) => (
  <nav className = { "panel navbar" } key = { "org-navbar" }>{"\n    "}<p className = { "panel-heading title" } style = {{ "border": "none", "margin": "0" }}>{"\n      "}<a href = { `https://github.com/${user}` } target = { "_blank" } style = {{ "color": "#4a4a4a" }}>{ user }</a>{"\n    "}</p>{"\n    "}<p className = { "control has-icons-left" } style = {{ "margin": "1px", "width": "45%" }}>{"\n      "}<input className = { "input is-small" } type = { "text" } placeholder = { "search" } onChange = {(e) => {
        e.preventDefault()
        filterFunc(e.target.value)
      } }/>{"\n      "}<span className = { "icon is-small is-left" }>{"\n        "}<i className = { "fa fa-search" }/>{"\n      "}</span>{"\n    "}</p>{"\n  "}</nav>
)

export default Header
