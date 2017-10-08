import React from 'react'
import PropTypes from 'prop-types'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
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
      <div>
        <p onClick = { this._handleClick } className = { 'panel-heading' }>
          { this.props.title }
        </p>
        {
          this.state.isActive ?
            this.props.issues.map((issue) =>
              <a className = { 'panel-block' }>
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
  title: PropTypes.string.isRequired,
  issues: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default List
