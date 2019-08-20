import React, { Component } from "react";
import { Link } from "gatsby";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export class dropdownResources extends Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
      isArrowDown: true
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true, isArrowDown: false }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false, isArrowDown: true }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    let dropdownArrow;
    if (this.state.isArrowDown) {
      dropdownArrow = (
        <span className="self-center mx-1">
          <FaAngleDown />
        </span>
      );
    } else {
      dropdownArrow = (
        <span className="self-center mx-1">
          <FaAngleUp />
        </span>
      );
    }

    return (
      <div className="dropdown relative inline-block cursor-pointer">
        <div className="button flex" onClick={this.showDropdownMenu}>
          Resources {dropdownArrow}
        </div>
        {this.state.displayMenu ? (
          <ul
            className="text-white text-center absolute z-10 p-2 whitespace-no-wrap"
            style={{ backgroundColor: "rgba(0,0,0,0.5)", left: "-50%" }}
          >
            <li className="px-2 py-1">
              <Link to="/bulletin">Weekly Bulletin</Link>
            </li>
            <li className="px-2 py-1">
              <Link to="/sermon">Sermon</Link>
            </li>
            <li className="px-2 py-1">
              <Link to="/newsletter">Newsletter</Link>
            </li>
            <li className="px-2 py-1">
              <Link to="/policies">ULC Policies</Link>
            </li>
            <li className="px-2 py-1">
              <Link to="/chapelCouncil">Chapel Council</Link>
            </li>
            <li className="px-2 py-1">
              <Link to="/lutheranResources">Lutheran Resources</Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default dropdownResources;
