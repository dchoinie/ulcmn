import React, { Component } from "react";
import { Link } from "gatsby";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export class dropdownSupport extends Component {
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
          Support {dropdownArrow}
        </div>
        {this.state.displayMenu ? (
          <ul
            className="text-white text-center absolute z-10 p-2 whitespace-no-wrap"
            style={{ backgroundColor: "rgba(0,0,0,0.5)", left: "-50%" }}
          >
            <li className="px-2 py-1">
              <Link to="/build-it-back">Build-It-Back</Link>
            </li>
            <li className="px-2 py-1">
              <Link to="/pipe-organ">Pipe Organ Fund</Link>
            </li>
            <li className="px-2 py-1">
              <Link to="/general-fund">General Fund</Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default dropdownSupport;
