import React, { Component } from "react";
import Logo from "../../favicon.png";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import DropdownAbout from "../dropdownAbout";
import DropdownSupport from "../dropdownSupport";
import DropdownResources from "../dropdownResources";

export class header extends Component {
  state = {
    backgroundColor: "rgba(0,0,0,0)"
  };

  static propTypes = {
    color: PropTypes.string
  };

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({ backgroundColor: "rgba(0,0,0,0.2)" });
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
              <li className="mx-2 cursor-pointer">
                <DropdownAbout />
              </li>
            </Link>
            <Link to="/calendar" className="z-40">
              <li className="mx-2 cursor-pointer">Calendar</li>
            </Link>
            <Link to="/mapShuttle" className="z-40">
              <li className="mx-2 cursor-pointer">Map &#38; Shuttle</li>
            </Link>
            <Link to="/support" className="z-40">
              <li className="mx-2 cursor-pointer">
                <DropdownSupport />
              </li>
            </Link>
            <Link to="/resources" className="z-40">
              <li className="mx-2 cursor-pointer">
                <DropdownResources />
              </li>
            </Link>
            <Link to="/library" className="z-40">
              <li className="mx-2 cursor-pointer">Library</li>
            </Link>
            <a
              href="https://members.instantchurchdirectory.com/"
              className="z-40"
              target="_blank"
            >
              <li className="mx-2 cursor-pointer">Directory</li>
            </a>
            <Link to="/contact" className="z-40">
              <li className="mx-2 cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default header;
