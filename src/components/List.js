import React from "react"
import PropTypes from "prop-types"

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "isActive": false
    }
    this._handleClick = (e) => {
      e.preventDefault()
      this.setState((prevState) => {
        isActive: !prevState.isActive
      })
    }
  }

  render() {
    return (
      <div style = {{ "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center" }}>
        <button className = { "button is-primary is-outlined is-fullwidth" } style = {{ "width": "30%" }} >
          { this.props.title }
        </button>
        {
          this.state.isActive ?
            this.props.issues.map((issue) =>
              <a className = { "panel-block" }>
                { issue }
              </a>
            ) :
            null
        }
      </div>
    )
  }
}

List.propTypes = {
  "title": PropTypes.string.isRequired,
  "issues": PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List
