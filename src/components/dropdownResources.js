import React, { Component } from "react";
import { Link } from "gatsby";

export class dropdownResources extends Component {
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
          Resources
        </div>
        {this.state.displayMenu ? (
          <ul
            className="text-white text-center absolute z-10 p-2 whitespace-no-wrap"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
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
              <Link to="/chapel-council">Chapel Council</Link>
            </li>
            <li className="px-2 py-1">
              <Link to="/lutheran-resources">Lutheran Resources</Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default dropdownResources;
