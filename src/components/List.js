import React from "react"
import PropTypes from "prop-types"
import Loader from "./Loader"

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "isActive": false
    }
    this._handleClick = (e) => {
      e.preventDefault()
      this.setState((prevState) => ({
        "isActive": !prevState.isActive
      }))
    }
  }

  render() {
    return (
      <div style = {{ "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" }}>{"\n        "}<button className = { "button is-primary is-outlined is-fullwidth" } style = {{ "width": "80%", "cursor": this.props.fetching ? "default" : "pointer" }} onClick={ this.props.fetching ? null : this._handleClick }>{"\n          "}{ this.props.fetching ?
            "Loading..." :
            this.props.title
          }{"\n        "}</button>{"\n        "}{
          this.state.isActive ?
            (
              this.props.issues.length === 0 ?
                <a className = { "panel-block" } style = {{ "width": "80%", "fontSize": "small" }}>{"\n                  No Issues Found\n                "}</a> :
                this.props.issues.map((issue) =>
                    <a href = { issue["html_url"] } target = { "_blank" }  className = { "panel-block" } style = {{ "width": "80%", "fontSize": "small" }}>{"\n                      "}{ issue["html_url"] }{"\n                    "}</a>
                )
            ) :
            null
        }{"\n      "}</div>
    )
  }
}

List.propTypes = {
  "title": PropTypes.string.isRequired,
  "issues": PropTypes.arrayOf(PropTypes.object).isRequired,
  "fetching": PropTypes.bool.isRequired
}

export default List
