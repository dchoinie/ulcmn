import React, { Component } from "react";

export class footer extends Component {
  render() {
    return (
      <div
        className="text-center py-4"
        style={{
          backgroundColor: "#292929",
          color: "rgba(255, 255, 255, 0.4)"
        }}
      >
        <p>
          © {new Date().getFullYear()} · University Lutheran Chapel · 316 10th
          Ave SE, Minneapolis MN 55414 · 612-331-2747
        </p>
      </div>
    );
  }
}

export default footer;
