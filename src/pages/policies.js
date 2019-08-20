import React, { Component } from "react";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import { FaExternalLinkAlt } from "react-icons/fa";

export class policies extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="ULC Policies" />
        <div className="container mx-auto my-12">
          <h3 className="text-center">
            Official Policies and Statements of University Lutheran Chapel
          </h3>
          <div className="my-12 px-2">
            <h5 style={{ color: "var(--red-main)" }}>
              Regarding the Performance of Weddings
            </h5>
            <p>
              The pastor&#40;s&#41; of University Lutheran Chapel will not under
              any circumstances conduct marriages that are not in accord with
              the teachings of the Holy Scriptures of the Christian Faith, in
              particu- lar, unions, whether sanctioned by the state or not,
              consisting of anything other than one man and one woman. The
              facilities of University Lutheran Chapel will not be used for
              marriages other than those conducted by her pastor&#40;s&#41; or
              with the permission of her pastor&#40;s&#41; and in accord with
              the teachings of the Holy Scriptures of the Christian Faith.
              &#40;Adopted July 9, 2013&#41;
            </p>
          </div>
          <div className="my-12 px-2">
            <h5 style={{ color: "var(--red-main)" }}>
              Regarding Gender and Marriage
            </h5>
            <p>
              In the beginning God created humans as either male or female. He
              did not create them without a gender nor did he create anyone with
              multiple genders. &#40;Gen 1:27 &#38; 2:22&#41; Those who present
              themselves differently than the gender God gave them when they
              were procreated reject God’s design for them. o In the beginning
              God defined marriage as the union of one man and one woman.
              &#40;Gen 2:24&#41; Our Lord Jesus Christ cited Gen 2:24 in
              reiterating the definition of marriage. &#40;Mk 10:7-8a&#41;
              &#40;Adopted November 13, 2017&#41;
            </p>
          </div>
          <div className="my-12 px-2">
            <h5 style={{ color: "var(--red-main)" }}>Regarding Life Issues</h5>
            <p>
              We believe that all human life is sacred and created by God in His
              image. Human life is of inestimable worth in all its dimensions,
              including pre-born babies, the aged, the physically or mentally
              challenged, and every other stage or condition from conception
              through natural death. We are therefore called to defend, protect,
              and value all human life. &#40;Adopted November 13, 2017&#41;
            </p>
          </div>
          <div className="my-12 px-2">
            <h5 style={{ color: "var(--red-main)" }}>
              Regarding Excommunication
            </h5>
            <p>
              When an issue of excommunication arises, the pastor shall make the
              determination regarding excommunication after consultation with
              the elders. When a member is excommunicated the action will be
              announced to the congregation. The pastor shall also make the
              determination, after consultation with the elders, whether to
              reveal to the congregation and to what extent, if any, the
              reason&#40;s&#41; for the excommunication. &#40;Adopted November
              13, 2017&#41;
            </p>
          </div>
          <div className="my-12 px-2">
            <h5 style={{ color: "var(--red-main)" }}>
              Regarding Paid Church Workers
            </h5>
            <p>
              All paid church workers of ULC shall sign a copy of the following
              statement at the time of accepting a call or of being hired:
              <ul>
                <li className="italic">
                  I understand that I am to conduct my life, both at work and
                  away from work, in a Christian manner as taught in the Bible
                  and the Lutheran Confessions and as understood by ULC and that
                  failure to do so is grounds for excommunication and/or release
                  of call or dismissal from employment.
                </li>
              </ul>
              &#40;Adopted November 19, 2017&#41;
            </p>
          </div>
          <div className="my-12 px-2">
            <h5 style={{ color: "var(--red-main)" }}>
              Regarding Use of ULC Facilities
            </h5>
            <p>
              Use of the facilities owned by ULC is limited to the members of
              ULC and their guests. ULC sponsored events take priority over all
              other events. ULC’s chapel council must approve by adopted
              resolution the use of ULC facilities by any entity other than a
              member of ULC. Such use shall only be allowed to extend to those
              who are in fellowship with ULC. &#40;Adopted November 19,
              2017&#41;
            </p>
          </div>
          <div className="my-12 px-2">
            <h5 style={{ color: "var(--red-main)" }}>
              Regarding Sexual Misconduct
            </h5>
            <p>
              See the document entitled&nbsp;
              <a
                href="https://drive.google.com/open?id=15UdIVa9u2p_Qs1TktoDQRvfodklR0pjo"
                target="_blank"
                className="underline hover:text-red-700"
              >
                “General Policy Regarding Sexual Misconduct Prevention”{" "}
                <FaExternalLinkAlt className="inline mx-1" />
              </a>
              &#40;Adopted 2013&#41;
            </p>
          </div>
          <div className="my-12 px-2">
            <h5 style={{ color: "var(--red-main)" }}>
              Regarding Closed Communion
            </h5>
            <p>
              In accordance with the apostolic command and in unity with the
              unbroken practice of the Church, University Lutheran Chapel
              practices Closed Communion. If you are not a member of a
              congregation in fellowship with the Lutheran Church-Missouri Synod
              we kindly ask you to re- frain from communing. We do so not to
              offend you, but because the Scriptures clearly teach that those
              communing together be unified in their confession of the Faith. In
              this Sacrament we are not only joined to Christ our Head who is
              present in His body and blood, but are also knit togeth- er with
              one another as His Body, in which there should be no division of
              belief. Should you have questions or concerns about this Biblical
              and historic doctrine, please speak with our pastor.
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default policies;
