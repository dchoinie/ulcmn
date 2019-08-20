import React, { Component } from "react";
import { Link } from "gatsby";
import Waves from "../images/dust_scratches.png";
import Button from "../components/buttons/button";
import Support1 from "../images/GregoryMass.png";
import Support2 from "../images/LitAssist.png";
import Support3 from "../images/monk-writing-1.png";
import Support4 from "../images/Tithing.png";

export class support extends Component {
  render() {
    return (
      <div
        className="container mx-auto py-12 p-6 rounded flex-row lg:flex lg:shadow-2xl lg:p-12 lg:my-12"
        style={{ backgroundImage: `url(${Waves})` }}
      >
        <div className="w-full lg:w-2/4">
          <div id="homePageSupport">
            <div className="supportImgOverlayContainer cursor-pointer">
              <img
                src={Support1}
                alt="support1"
                className="rounded shadow-lg"
              />
              <div className="supportImgOverlay flex justify-center rounded">
                <div className="text-center self-center text-white text-2xl">
                  <Link to="build-it-back">Build-It-Back</Link>
                </div>
              </div>
            </div>
            <div className="supportImgOverlayContainer cursor-pointer">
              <img
                src={Support2}
                alt="support2"
                className="rounded shadow-lg"
              />
              <div className="supportImgOverlay flex justify-center rounded">
                <div className="text-center self-center text-white text-2xl">
                  <Link to="pipe-organ">Pipe Organ Fund</Link>
                </div>
              </div>
            </div>
            <div className="supportImgOverlayContainer cursor-pointer">
              <img
                src={Support3}
                alt="support3"
                className="rounded shadow-lg"
              />
              <div className="supportImgOverlay flex justify-center rounded">
                <div className="text-center self-center text-white text-2xl">
                  <Link to="generalFund">General Fund</Link>
                </div>
              </div>
            </div>
            <div className="supportImgOverlayContainer cursor-pointer">
              <img
                src={Support4}
                alt="support4"
                className="rounded shadow-lg"
              />
              <div className="supportImgOverlay flex justify-center rounded">
                <div className="text-center self-center text-white text-2xl">
                  <Link to="construction">Construction Update</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center mb-4 lg:text-left lg:self-center lg:mx-6 lg:w-2/4 lg:mb-0">
          <h2 className="lg:text-5xl font-bold mt-12 lg:mt-0 text-red-700">
            Support ULC
          </h2>
          <hr style={{ borderTop: "1px solid var(--gray-main)" }} />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sed
            mollitia veritatis totam iure architecto! Necessitatibus maiores
            explicabo quod. Veritatis laborum laboriosam debitis, accusamus
            aspernatur quam saepe dignissimos facere porro!
          </p>
        </div>
      </div>
    );
  }
}

export default support;
