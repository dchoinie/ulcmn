import React, { Component } from "react";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import Oremus from "../images/Oremus.png";

export class lutheranResources extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="Lutheran Resources" />
        <div className="container mx-auto">
          <div id="resourcesGrid">
            <div className="grid-col text-center">
              <div className="flex flex-col justify-center">
                <h4>Oremus: A Lutheran Breviary</h4>
                <img
                  src={Oremus}
                  alt="Oremus"
                  className="mx-auto rounded"
                  style={{ boxShadow: "0px 1px 10px var(--gray-main)" }}
                />
              </div>
            </div>
            <div className="grid-col text-center">Col 1</div>
            <div className="grid-col text-center">Col 1</div>
            <div className="grid-col text-center">Col 1</div>
            <div className="grid-col text-center">Col 1</div>
            <div className="grid-col text-center">Col 1</div>
            <div className="grid-col text-center">Col 1</div>
            <div className="grid-col text-center">Col 1</div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default lutheranResources;
