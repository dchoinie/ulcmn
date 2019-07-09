import React, { Component } from "react";
import Logo from "../../favicon.png";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { FaBars } from "react-icons/fa";
import DropdownAbout from "../dropdownAbout";
import DropdownSupport from "../dropdownSupport";
import DropdownResources from "../dropdownResources";

class header extends Component {
  constructor() {
    super();
  }

  state = {
    backgroundColor: "rgba(0,0,0,0)",
    isCollapsed: false
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
      <div
        className="sticky top-0 flex justify-between items-center z-40"
        style={{
          backgroundColor: this.state.backgroundColor,
          color: this.props.color
        }}
        id="topnav"
      >
        <Link to="/" className="z-40 headerImg">
          <img
            src={Logo}
            alt="Logo"
            style={{ maxWidth: "50px" }}
            className="ml-12 my-2 logo"
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
          <a
            href="javascript:void(0);"
            className="self-center icon"
            onClick="showHamburger"
          >
            <FaBars />
          </a>
        </ul>
      </div>
    );
  }
}

export default header;
