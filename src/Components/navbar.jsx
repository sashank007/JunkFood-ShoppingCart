import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        {" "}
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">JunkFooood!!</span>
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </nav>
      </div>
    );
  }
}

export default NavBar;
