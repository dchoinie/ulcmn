import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FaAngleRight } from "react-icons/fa";

export class button extends Component {
  static propTypes = {
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    marginRight: PropTypes.string,
    marginLeft: PropTypes.string
  };

  static defaultProps = {
    textColor: "#fff",
    backgroundColor: "var(--red-main)",
    text: "button",
    to: "/",
    marginRight: "0",
    marginLeft: "0"
  };

  render() {
    return (
      <div className="flex my-6 cursor-pointer">
        <Link
          to={this.props.to}
          className="rounded px-4 py-2 capitalize leading-loose whitespace-no-wrap shadow-lg"
          style={{
            backgroundColor: this.props.backgroundColor,
            color: this.props.textColor,
            marginRight: this.props.marginRight,
            marginLeft: this.props.marginLeft
          }}
        >
          <div className="flex items-center">
            {this.props.text} <FaAngleRight className="mx-1 text-xl" />
          </div>
        </Link>
      </div>
    );
  }
}

export default button;
