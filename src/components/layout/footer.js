import React, { Component } from "react";
import LCMS from "../../images/lcms.png";
import DropdownAbout from "../dropdownAbout";
import DropdownSupport from "../dropdownSupport";
import DropdownResources from "../dropdownResources";

export class footer extends Component {
  render() {
    return (
      <div
        className="py-6 text-white flex flex-col lg:flex-row justify-between"
        style={{ backgroundColor: "var(--gray-main)" }}
      >
        <div className="flex justify-center my-2 lg:block lg:mx-12 lg:my-0">
          <img src={LCMS} alt="LCMS Logo" style={{ maxWidth: "200px" }} />
        </div>
        <div className="mx-12">
          <div className="flex justify-center my-2 lg:block lg:my-0">
            <ul className="flex-col text-center lg:flex lg:flex-row">
              <li className="mx-1">
                <DropdownAbout />
              </li>
              <li className="mx-1">Calendar</li>
              <li className="mx-1">Map &#38; Shuttle</li>
              <li className="mx-1">
                <DropdownSupport />
              </li>
              <li className="mx-1">
                <DropdownResources />
              </li>
              <li className="mx-1">Library</li>
              <li className="mx-1">Directory</li>
              <li className="mx-1">Contact</li>
            </ul>
          </div>
          <div className="flex justify-center my-2 lg:block lg:text-right lg:my-0">
            <small
              className="text-center"
              style={{ color: "var(--yellow-main)" }}
            >
              © {new Date().getFullYear()} · University Lutheran Chapel · 316
              10th Ave SE, Minneapolis MN 55414 · 612-331-2747
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
