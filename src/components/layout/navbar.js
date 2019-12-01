import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";

export class navbar extends Component {
  static defaultProps = {
    // will appear if i don't pass prop to Navbar Tag in App.js
    title: " Github Finder"
  };

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const websiteLogo = <FontAwesomeIcon icon={faFeather} />;
    return (
      <div>
        <nav className="navbar bg-success">
          <h1>
            {websiteLogo}
            {this.props.title}
          </h1>
        </nav>
      </div>
    );
  }
}

export default navbar;
