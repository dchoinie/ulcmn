import React, { Component } from "react";
import Waves from "../images/dust_scratches.png";
import Chalice from "../images/chalice.png";
import Button from "../components/buttons/button";

export class about extends Component {
  render() {
    return (
      <div
        className="container mx-auto py-12 p-6 rounded flex-row lg:flex lg:shadow-2xl lg:p-12 lg:my-12"
        style={{ backgroundImage: `url(${Waves})` }}
      >
        <div className="w-full lg:w-2/4">
          {/* Replace with image of finished chapel */}
          <img
            src={Chalice}
            alt="chalice"
            className="rounded"
            style={{ boxShadow: "1px 1px 5px var(--gray-dark)" }}
          />
        </div>
        <div className="w-full text-center mb-4 lg:text-left lg:self-center lg:mx-6 lg:w-2/4 lg:mb-0">
          <h2 className="lg:text-5xl font-bold mt-12 lg:mt-0 text-red-700">
            Welcome To University Lutheran Chapel
          </h2>
          <hr style={{ borderTop: "1px solid var(--gray-main)" }} />
          <p>
            ULC is a campus congregation at the University of Minnesota. We are
            committed to helping students not just survive, but grow in their
            faith while in college. We are faithful to the Scriptures in our
            teaching, liturgical in our worship, and strive to be gracious and
            supportive in our life together. If you are seeking a place to dwell
            with Christ and grow in His grace, you've just found it!
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button to="lutherHouse" text="Luther House" />
          </div>
        </div>
      </div>
    );
  }
}

export default about;
