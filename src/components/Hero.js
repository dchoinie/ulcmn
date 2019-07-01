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
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <div className="text-right" style={{ zIndex: "1", marginTop: "-66px" }}>
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{ height: "100vh" }}
      />
      <div
        className="absolute px-12 text-white"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%"
        }}
      >
        <h1 className="text-center md:text-right text-xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ">
          {data.site.siteMetadata.title}
        </h1>
        <h4 className="text-center md:text-right sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
          {data.site.siteMetadata.description}
        </h4>
      </div>
    </div>
  );
};
