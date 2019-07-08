import React, { Component } from "react";
import PropTypes from "prop-types";

export class pageTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string
  };

  static defaultProps = {
    textColor: "var(--red-main)"
  };

  render() {
    return (
      <div className="text-center my-8">
        <h1 className="font-bold" style={{ color: this.props.textColor }}>
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default pageTitle;
