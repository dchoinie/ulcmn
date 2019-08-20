import React, { Component } from "react";
import PropTypes from "prop-types";
import HeaderImg from "../images/ashes.jpg";

export class pageTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    textColor: PropTypes.string
  };

  static defaultProps = {
    textColor: "#fff"
  };

  render() {
    return (
      <div
        className="text-center flex justify-center"
        style={{
          backgroundImage: `url(${HeaderImg})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          height: "400px"
        }}
      >
        <h1
          className="font-bold self-center lg:text-5xl tracking-wide"
          style={{ color: this.props.textColor }}
        >
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default pageTitle;
