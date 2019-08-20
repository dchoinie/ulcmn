import React, { Component } from "react";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import StaffMember from "../components/staffMember";
import Pastor from "../images/staff/David_Kind.png";
import Jim from "../images/staff/Jim_Glynn.png";

export class staff extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="Staff" />
        <h2 className="text-red-700 text-center font-bold text-5xl my-12">
          Clergy
        </h2>
        <div className="my-12 flex justify-center">
          <div className="flex flex-col mx-auto text-center items-center">
            <img src={Pastor} alt="Pastor Kind" className="rounded" />
            <StaffMember name="David Kind" title="Pastor" />
            <p className="container px-12">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              adipisci non pariatur corporis expedita optio obcaecati quod iste,
              temporibus quis praesentium molestias nesciunt nihil ducimus quo
              necessitatibus recusandae consequuntur voluptatem. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Porro adipisci non
              pariatur corporis expedita optio obcaecati quod iste, temporibus
              quis praesentium molestias nesciunt nihil ducimus quo
              necessitatibus recusandae consequuntur voluptatem.
            </p>
          </div>
        </div>
        <h2 className="text-red-700 text-center font-bold text-5xl my-12">
          Counsel
        </h2>
        <div className="staffRow">
          <div>
            <img src={Jim} alt="Jim Glynn" className="rounded" />
            <StaffMember name="Jim Glynn" title="President" />
          </div>
          <div>
            <img src={Jim} alt="Jim Glynn" className="rounded" />
            <StaffMember name="Jim Glynn" title="President" />
          </div>
          <div>
            <img src={Jim} alt="Jim Glynn" className="rounded" />
            <StaffMember name="Jim Glynn" title="President" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default staff;
