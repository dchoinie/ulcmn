import React, { Component } from "react";
import PropTypes from "prop-types";

export class staffMember extends Component {
  static propTyles = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <h2 className="font-bold">{this.props.name}</h2>
        <h4 className="text-red-700">{this.props.title}</h4>
      </div>
    );
  }
}

export default staffMember;
