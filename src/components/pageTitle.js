import React, { Component } from "react";
import PropTypes from "prop-types";

export class pageTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string
  };

  render() {
    return (
      <div className="text-center my-8">
        <h2
          className="text-4xl font-bold"
          style={{ color: this.props.textColor }}
        >
          {this.props.title}
        </h2>
      </div>
    );
  }
}

export default pageTitle;
