import React, { Component } from "react";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import StaffMember from "../components/staffMember";
import Pastor from "../images/staff/David_Kind.png";
import Jim from "../images/staff/Jim_Glynn.png";
import Dan from "../images/staff/Dan_Choiniere.jpg";
import Sam from "../images/staff/Sam_Bauer.jpg";
import Jesse from "../images/staff/Jesse_Greenhagen.png";
import Karen from "../images/staff/Karen_Henke.png";
import Arthur from "../images/staff/Arthur_Aaberg.png";
import Caroline from "../images/staff/Caroline_Mueller.png";
import Kurt from "../images/staff/Kurt_Weber.png";
import Melissa from "../images/staff/Melissa_Buelow.png";
import Stacy from "../images/staff/Stacy_Phan.png";
import Dennis from "../images/staff/Dennis_Bauer.png";

export class staff extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="Staff" />
        <h2 className="text-red-700 text-center font-bold text-5xl my-12 underline">
          Clergy
        </h2>
        <div className="flex flex-col justify-center px-6 items-center lg:flex-row lg:justify-around">
          <div className="text-center">
            <img
              src={Pastor}
              alt="Pastor Kind"
              className="rounded"
              style={{ boxShadow: "2px 2px 15px var(--gray-main)" }}
            />
            <StaffMember name="Rev. David Kind" title="Campus Pastor" />
          </div>
          <div>
            <p className="container max-w-xl my-4">
              Rev. David A. Kind has been our campus pastor since 2001. He grew
              up in Wisconsin, but is an alumnus of the University of Minnesota
              &#40;BA in History, '92&#41; and of ULC. He attended Concordia
              Theological Seminary in Fort Wayne, Indiana &#40;MDiv, '96&#41;.
              He previously served as pastor of First Lutheran in Waldorf and
              St. John's Lutheran in Minnesota Lake, MN, and as a seminary
              recruiter.
            </p>
            <p className="container max-w-xl my-4">
              A member of the Board of Regents of Concordia University, St.
              Paul; Pastor Kind has served in the past on the Board of Directors
              for Higher Things &#40;Dare to Be Lutheran!&#41; and as HT's Vice
              President. He is also a part-time instructor at Wittenberg
              Academy. Pastor Kind is the author of{" "}
              <a
                href="https://www.amazon.com/About-Our-Liturgy-Meaning-Practice/dp/B0071N8GDM"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                About Our Liturgy:Meaning, History and Practice &#40;2003&#41;
              </a>{" "}
              and{" "}
              <a
                href="http://www.lulu.com/us/en/shop/david-kind/oremus-a-lutheran-breviary/hardcover/product-22305447.html"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Oremus: A Lutheran Breviary &#40;2015&#41;
              </a>
              . He has written articles for several publications and is often
              asked to speak on topics related to the theology, history and
              worship of the Church. Frequently a guest on various Lutheran
              radio shows, Pastor is also a monthly guest on Jonathan Fisk's
              show "Sharper Iron" on KFUO.
            </p>
            <p className="container max-w-xl my-4">
              Pastor and his wife, Dana, live in Blaine. They have one child,
              Andrew. Pastor is an avid woodworker, jazz aficionado, gardener
              and Packer fan.
            </p>
          </div>
        </div>
        <h2 className="text-red-700 text-center font-bold text-5xl my-12 underline">
          Lay Leadership
        </h2>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around text-center px-6 lg:px-0">
          <div className="my-4">
            <img
              src={Jim}
              alt="Jim Glynn"
              className="rounded"
              style={{
                maxWidth: "325px",
                boxShadow: "2px 2px 15px var(--gray-main)"
              }}
            />
            <StaffMember name="Jim Glynn" title="President &amp; Elder" />
          </div>
          <div className="my-4">
            <img
              src={Dan}
              alt="Dan Choiniere"
              className="rounded"
              style={{
                maxWidth: "325px",
                boxShadow: "2px 2px 15px var(--gray-main)"
              }}
            />
            <StaffMember name="Dan Choiniere" title="Elder" />
          </div>
          <div className="my-4">
            <img
              src={Sam}
              alt="Sam Bauer"
              className="rounded"
              style={{
                maxWidth: "325px",
                boxShadow: "2px 2px 15px var(--gray-main)"
              }}
            />
            <StaffMember name="Sam Bauer" title="Elder" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around text-center px-6 lg:px-0">
          <div className="my-4">
            <img
              src={Karen}
              alt="Karen Henke"
              className="rounded"
              style={{
                maxWidth: "325px",
                boxShadow: "2px 2px 15px var(--gray-main)"
              }}
            />
            <StaffMember name="Karen Henke" title="Fellowship Chair" />
          </div>
          <div className="my-4">
            <img
              src={Jesse}
              alt="Jesse Greenhagen"
              className="rounded"
              style={{
                maxWidth: "325px",
                boxShadow: "2px 2px 15px var(--gray-main)"
              }}
            />
            <StaffMember name="Jesse Greenhagen" title="Outreach Chair" />
          </div>
          <div className="my-4">
            <img
              src={Dennis}
              alt="Dennis Bauer"
              className="rounded"
              style={{
                maxWidth: "325px",
                boxShadow: "2px 2px 15px var(--gray-main)"
              }}
            />
            <StaffMember name="Dennis Bauer" title="Treasurer" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around text-center px-6 lg:px-0">
          <div className="my-4">
            <img
              src={Stacy}
              alt="Stacy Phan"
              className="rounded"
              style={{
                maxWidth: "325px",
                boxShadow: "2px 2px 15px var(--gray-main)"
              }}
            />
            <StaffMember name="Stacy Phan" title="Financial Secretary" />
          </div>
          <div className="my-4">
            <img
              src={Kurt}
              alt="Kurt Weber"
              className="rounded"
              style={{
                maxWidth: "325px",
                boxShadow: "2px 2px 15px var(--gray-main)"
              }}
            />
            <StaffMember name="Kurt Weber" title="Properties" />
          </div>
          <div className="my-4">
            <img
              src={Caroline}
              alt="Caroline Mueller"
              className="rounded"
              style={{
                maxWidth: "325px",
                boxShadow: "2px 2px 15px var(--gray-main)"
              }}
            />
            <StaffMember
              name="Caroline Mueller"
              title="Christian Service Chair"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around text-center px-6 lg:px-0">
          <div className="my-4">
            <img
              src={Arthur}
              alt="Arthur Aaberg"
              className="rounded"
              style={{
                maxWidth: "325px",
                boxShadow: "2px 2px 15px var(--gray-main)"
              }}
            />
            <StaffMember name="Arthur Aaberg" title="Properties Chair" />
          </div>
          <div className="my-4">
            <img
              src={Melissa}
              alt="Melissa Buelow"
              className="rounded"
              style={{
                maxWidth: "325px",
                boxShadow: "2px 2px 15px var(--gray-main)"
              }}
            />
            <StaffMember name="Melissa Buelow" title="Nurture Chair" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default staff;
