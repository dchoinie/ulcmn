import React, { Component } from "react";
import Logo from "../../favicon.png";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export class header extends Component {
  state = {
    backgroundColor: "rgba(0,0,0,0)",
    color: "#fff"
  };

  static propTypes = {
    color: PropTypes.string
  };

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({ backgroundColor: "rgba(0,0,0,0.5)" });
    } else {
      this.setState({ backgroundColor: "rgba(0,0,0,0)" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div className="sticky top-0 z-40">
        <div
          className="flex justify-between items-center z-40"
          style={{
            backgroundColor: this.state.backgroundColor,
            color: this.props.color
          }}
        >
          <Link to="/">
            <img
              src={Logo}
              alt=""
              style={{ maxWidth: "50px" }}
              className="ml-12 my-2 z-40"
            />
          </Link>
          <ul className="flex mr-12">
            <Link to="/" className="z-40">
              <li className="mx-2 cursor-pointer">About ULC</li>
            </Link>
            <Link to="/calendar" className="z-40">
              <li className="mx-2 cursor-pointer">Calendar</li>
            </Link>
            <Link to="/mapShuttle" className="z-40">
              <li className="mx-2 cursor-pointer">Map & Shuttle</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2 cursor-pointer">Support</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2 cursor-pointer">Resources</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2 cursor-pointer">Library</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2 cursor-pointer">Construction</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2 cursor-pointer">Blog</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2 cursor-pointer">Directory</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2 cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default header;
