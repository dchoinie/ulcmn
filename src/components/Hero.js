import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Hero from "../images/hero.png";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixelss
          fluid(quality: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          address
          time
        }
      }
    }
  `);
  return (
    <div className="" style={{ marginTop: "-68.28px" }}>
      <Img fluid={data.file.childImageSharp.fluid} className="h-screen" />
      <div
        className="text-white"
        style={{ top: "calc(50% - 68.28px)" }}
        id="heroDiv"
      >
        <div className="text-center px-6 lg:text-right lg:px-0">
          <h1 className="font-bold lg:text-6xl">
            {data.site.siteMetadata.title}
          </h1>
          <hr
            className="md:hidden"
            style={{ borderBottom: "1px solid white" }}
          />
          <h5 className="lg:text-2xl">{data.site.siteMetadata.description}</h5>
        </div>
      </div>
    </div>
  );
};
