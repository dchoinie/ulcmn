import React, { Component } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Waves from "../images/dust_scratches.png";
import Button from "../components/buttons/button";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "graebner.jpg" }) {
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
    <div
      className="container mx-auto py-12 p-6 rounded flex-row lg:flex lg:shadow-2xl lg:p-12 lg:my-12"
      style={{ backgroundImage: `url(${Waves})` }}
    >
      <div className="w-full text-center mb-4 lg:text-right lg:self-center lg:mx-6 lg:w-2/4 lg:mb-0">
        <Link to="worship" className="text-red-700">
          <h2 className="font-bold lg:text-5xl">Worship With Us</h2>
        </Link>
        <hr style={{ borderTop: "1px solid var(--gray-main)" }} />
        <h4 className="lg:text-2xl">{data.site.siteMetadata.title}</h4>
        <p>{data.site.siteMetadata.location}</p>
        <p>{data.site.siteMetadata.address}</p>
        <p>{data.site.siteMetadata.time}</p>
        <div className="flex justify-center lg:justify-end">
          <Button to="worship" text="Worship Times" />
        </div>
      </div>
      <div className="w-full lg:w-2/4">
        {/* Replace with image of finished chapel */}
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="rounded"
          style={{ boxShadow: "1px 1px 5px var(--gray-dark)" }}
        />
      </div>
    </div>
  );
};
