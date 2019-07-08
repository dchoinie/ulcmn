import React, { Component } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Logo from "../favicon.png";
import Image from "../images/chapelInterior2.jpg";

export default () => {
  const data = useStaticQuery(graphql`
    query {
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
      className="container mx-auto my-12 flex p-12 justify-between rounded"
      style={{ boxShadow: "5px 5px 15px var(--gray-light5)" }}
    >
      <div className="w-2/4 mx-6 text-right self-center">
        <Link to="worship" className="hover:text-red-700">
          <h2 className="text-5xl font-bold">Worship With Us</h2>
        </Link>
        <h3 style={{ color: "var(--red-main)" }}>
          {data.site.siteMetadata.title}
        </h3>
        <h5>{data.site.siteMetadata.location}</h5>
        <h5>{data.site.siteMetadata.address}</h5>
        <hr style={{ borderTop: "1px solid var(--gray-main)" }} />
        <h3>{data.site.siteMetadata.time}</h3>
      </div>
      <div className="w-2/4 mx-6">
        <img
          src={Image}
          alt="Worship"
          className="rounded"
          style={{ boxShadow: "2px 2px 15px var(--gray-main)" }}
        />
      </div>
    </div>
  );
};
