import React, { Component } from "react";
import { Link } from "gatsby";
import Waves from "../images/dust_scratches.png";
import Church from "../images/church.png";
import Button from "../components/buttons/button";

export class resources extends Component {
  render() {
    return (
      <div
        className="container mx-auto py-12 p-6 rounded flex-row lg:flex lg:shadow-2xl lg:p-12 lg:my-12"
        style={{ backgroundImage: `url(${Waves})` }}
      >
        <div className="w-full text-center mb-4 lg:text-right lg:self-center lg:mx-6 lg:w-2/4 lg:mb-0">
          <Link to="worship" className="text-red-700">
            <h2 className="font-bold lg:text-5xl">Resources</h2>
          </Link>
          <hr style={{ borderTop: "1px solid var(--gray-main)" }} />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            corrupti voluptate quia enim consectetur nesciunt illo, eos atque
            facilis nostrum doloribus, rerum adipisci nam est, dolores incidunt
            magnam. At, nostrum!
          </p>
          <div className="flex justify-center lg:justify-end">
            <Button to="resources" text="Resources" />
          </div>
        </div>
        <div className="w-full lg:w-2/4">
          {/* Replace with image of finished chapel */}
          <img src={Church} alt="church" className="rounded shadow-lg" />
        </div>
      </div>
    );
  }
}

export default resources;
