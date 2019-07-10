import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixelss
          fluid(quality: 100) {
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
    <div className="relative" style={{ zIndex: "1", marginTop: "-66px" }}>
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{ height: "100vh" }}
      />
      <div
        className="absolute text-white text-right px-12"
        style={{ top: "calc(50% - 66px)", right: "0" }}
      >
        <div>
          <h1 className="text-6xl font-bold">{data.site.siteMetadata.title}</h1>
          <h4 className="text-2xl">{data.site.siteMetadata.description}</h4>
        </div>
      </div>
    </div>
  );
};
