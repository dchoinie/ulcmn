import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Logo from "../favicon.png";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "chapelInterior.jpg" }) {
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
          location
          address
          time
        }
      }
    }
  `);
  return (
    <div className="container mx-auto py-24 text-center px-4">
      <h2 className="text-3xl md:text-6xl font-black">Worship With Us</h2>
      <img src={Logo} className="mx-auto my-4" style={{ maxWidth: "50px" }} />
      <h2 className="text-xl md:text-3xl font-bold">
        {data.site.siteMetadata.title}
      </h2>
      <h4 className="text-xl  text-red-700">
        {data.site.siteMetadata.description}
      </h4>
      <h4 className="text-lg md:text-xl">{data.site.siteMetadata.location}</h4>
      <h4 className="text-lg md:text-xl">{data.site.siteMetadata.address}</h4>
      <h4 className="text-lg md:text-xl">{data.site.siteMetadata.time}</h4>
    </div>
  );
};
