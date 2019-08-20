import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import PageTitle from "../components/pageTitle";

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
          lutherHouseAddress
        }
      }
    }
  `);
  return (
    <Layout>
      <PageTitle title="Map &#38; Shuttle" />
      <div className="text-center px-4 w-full md:w-2/4 mx-auto lg:px-0 mt-12">
        <h2>Sunday Shuttle Schedule</h2>
        <p className="text-lg">
          Catch a ride to our Sunday service at{" "}
          {data.site.siteMetadata.location} {data.site.siteMetadata.address}
        </p>
      </div>
      <div className="table sm:w-full md:w-2/4 container mx-auto text-center px-2 my-8">
        <div className="table-row border">
          <div className="table-cell py-2 w-2/4 text-xl font-bold underline">
            Location
          </div>
          <div className="table-cell py-2 w-2/4 text-xl font-bold underline">
            Time
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell py-2 bg-gray-100">17th Ave Res Hall</div>
          <div className="table-cell py-2 bg-gray-100">9:10 AM</div>
        </div>
        <div className="table-row">
          <div className="table-cell py-2 bg-gray-300">
            Superblock Dorms
            <br />
            <small>
              on Delaware St between Centennial Hall and the hospital parking
              garage
            </small>
          </div>
          <div className="table-cell py-2 bg-gray-300">9:20 AM</div>
        </div>
        <div className="table-row">
          <div className="table-cell py-2 bg-gray-100">
            Middlebrook Hall
            <br />
            <small>at the Middlebrook loading zone</small>
          </div>
          <div className="table-cell py-2 bg-gray-100">9:30 AM</div>
        </div>
        <div className="table-row">
          <div className="table-cell py-2 bg-gray-300">Sanford Hall</div>
          <div className="table-cell py-2 bg-gray-300">9:40 AM</div>
        </div>
        <div className="table-row">
          <div className="table-cell py-2 bg-gray-100">
            Bailey Hall
            <br />
            <small>by the bus stop on Buford Ave</small>
          </div>
          <div className="table-cell py-2 bg-gray-100">9:45 AM</div>
        </div>
        <div className="table-row">
          <div className="table-cell py-2 bg-gray-300">
            Concorida
            <br />
            <small>in front of Luther Hall</small>
          </div>
          <div className="table-cell py-2 bg-gray-300">9:30 AM</div>
        </div>
      </div>
      <div className="row container flex-col md:flex-row mx-auto flex text-center my-8 mx-2">
        <div className="col w-full md:w-2/4">
          <h2 className="my-2">Luther House</h2>
          <p className="my-2">{data.site.siteMetadata.lutherHouseAddress}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.1062552431076!2d-93.24352718424501!3d44.98215257349903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d72aba964d7%3A0x9f63d63e211d6d6f!2sLuther+House!5e0!3m2!1sen!2sus!4v1562002986704!5m2!1sen!2sus"
            frameborder={0}
            height={450}
            style={{ border: "0" }}
            allowfullscreen
            className="w-full p-4"
          ></iframe>
        </div>
        <div className="col w-full md:w-2/4">
          <h2 className="my-2">Graenber Memorial Chapel</h2>
          <p className="my-2">{data.site.siteMetadata.address}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.662919769533!2d-93.15644378424578!3d44.95051997559196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62a73bf226d8d%3A0x7d0b0f9de1e0db41!2sGraebner+Memorial+Chapel!5e0!3m2!1sen!2sus!4v1562003062354!5m2!1sen!2sus"
            height={450}
            frameborder={0}
            style={{ border: "0" }}
            allowfullscreen
            className="w-full p-4"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};
