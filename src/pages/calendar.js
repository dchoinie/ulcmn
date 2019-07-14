import React, { Component } from "react";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";

export class calendar extends Component {
  render() {
    return (
      <Layout>
        <div className="container mx-auto my-8">
          <PageTitle title="ULC Calendar" />
          <iframe
            src="https://calendar.google.com/calendar/embed?src=3r1jansvntqs0fa1todhgqli1k%40group.calendar.google.com&ctz=America%2FChicago"
            style={{ border: "0" }}
            width={"100%"}
            height={600}
            frameborder={0}
            scrolling={"no"}
          ></iframe>
          <div className="row my-8 flex flex-col text-center md:flex-row p-10 shadow-lg">
            <div className="col w-auto md:w-2/4 my-4">
              <h4 className="text-red-700 mb-4">
                To add the ULC Calendar please use this link:
              </h4>
              <a
                href="https://calendar.google.com/calendar?cid=M3IxamFuc3ZudHFzMGZhMXRvZGhncWxpMWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                target="_blank"
                className="text-white p-2 rounded hover:bg-red-800"
                style={{ backgroundColor: "var(--red-main)" }}
              >
                ULC Calendar
              </a>
            </div>
            <div className="col w-auto md:w-2/4 my-4">
              <h4 className="mb-4" style={{ color: "var(--red-main)" }}>
                To add the LSF Calendar please use this link:
              </h4>
              <a
                href="https://calendar.google.com/calendar?cid=N3JwMTNyN2c0MjhqODF0OTU1MzNiYjRsZTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                target="_blank"
                className="text-white p-2 rounded hover:bg-red-800"
                style={{ backgroundColor: "var(--red-main)" }}
              >
                LSF Calendar
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default calendar;
