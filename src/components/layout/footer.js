import React, { Component } from "react";
import LCMS from "../../images/lcms.png";

export class footer extends Component {
  render() {
    return (
      <div
        className="flex justify-between items-center text-white"
        style={{ backgroundColor: "var(--gray-main)", overflowX: "hidden" }}
      >
        <div className="py-4 mx-12">
          <img
            src={LCMS}
            alt="LCMS"
            className="mx-auto"
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div className="py-4 text-right mx-12">
          <ul className="flex justify-end">
            <li className="mx-1">About ULC</li>
            <li className="mx-1">Calendar</li>
            <li className="mx-1">Map &#38; Shuttle</li>
            <li className="mx-1">Support</li>
            <li className="mx-1">Resources</li>
            <li className="mx-1">Library</li>
            <li className="mx-1">Directory</li>
            <li className="ml-1">Contact</li>
          </ul>
          <small className="text-right" style={{ color: "var(--yellow-main)" }}>
            © {new Date().getFullYear()} · University Lutheran Chapel · 316 10th
            Ave SE, Minneapolis MN 55414 · 612-331-2747
          </small>
        </div>
      </div>
    );
  }
}

export default footer;
