import React, { Component } from "react";
import Logo from "../../favicon.png";
import { Link } from "gatsby";

export class header extends Component {
  state = {
    backgroundColor: "rgba(0,0,0,0)"
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
          className="flex justify-between items-center text-white z-40"
          style={{ backgroundColor: this.state.backgroundColor }}
        >
          <img
            src={Logo}
            alt=""
            style={{ maxWidth: "50px" }}
            className="ml-12 my-2 z-40"
          />
          <ul className="flex mr-12">
            <Link to="/" className="z-40">
              <li className="mx-2">About ULC</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2">Calendar</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2">Map & Shuttle</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2">Support</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2">Resources</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2">Library</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2">Construction</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2">Blog</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2">Directory</li>
            </Link>
            <Link to="/" className="z-40">
              <li className="mx-2">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default header;
