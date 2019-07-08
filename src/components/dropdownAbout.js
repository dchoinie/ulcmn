import React, { Component } from "react";
import { Link } from "gatsby";

export class dropdownAbout extends Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown relative inline-block cursor-pointer">
        <div className="button" onClick={this.showDropdownMenu}>
          About ULC
        </div>
        {this.state.displayMenu ? (
          <ul
            className="text-white text-center absolute z-10 p-2 whitespace-no-wrap"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <li className="px-2 py-1">
              <Link to="/worship">Worship Times</Link>
            </li>
            <li className="px-2 py-1">
              <Link to="/construction">Construction</Link>
            </li>
            <li className="px-2 py-1">
              <Link to="/staff">Staff</Link>
            </li>
            <li className="px-2 py-1">
              <Link to="/history">History</Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default dropdownAbout;
