import React from "react"

const Repository = props =>
  <p>
    <span style={{"marginRight": "20px"}}>
      { props.data.name }
    </span>
    {
      <span>{"Open issues: "}{ props.data.open_issues_count }</span>
    }
  </p>

export default Repository
