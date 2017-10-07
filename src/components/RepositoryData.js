import React, { Component } from "react"

class RepositoryData extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive && (!this.state || (this.state && !this.state.data))) {
      console.log("pullo i dati")
      this.setState({"data": "dei dati"})
    }
  }

  render() {
    return(
      <p
        style={{"display": this.props.isActive ? "block" : "none" }}
      >
        {"Test"}
      </p>
    )
  }
}

export default RepositoryData
