import React, { Component } from "react";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";

export class worship extends Component {
  render() {
    return (
      <Layout>
        <PageTitle title="Worship Times" />
        <div className="my-12">
          <h2 className="text-center text-red-700 font-bold text-4xl">
            Sunday Worship Times
          </h2>
        </div>
        <div className="flex flex-col justify-center text-center lg:text-left my-12 px-6 lg:px-12">
          <h3 className="my-2 text-center underline">
            Adult Bible Study: 8:45 AM
          </h3>
          <hr style={{ borderTop: "1px solid var(--gray-main)" }} />
          <p className="container mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit aliquam, ipsum iure consectetur blanditiis cupiditate
            rerum nobis aperiam odio, dolorem inventore, obcaecati impedit.
            Obcaecati id recusandae officia iure adipisci deserunt?
          </p>
          <h3 className="my-2 text-center underline">
            Divine Service: 10:00 AM
          </h3>
          <div className="container mx-auto">
            <p className="my-4">
              The Divine Service (or Mass) is the main worship service of the
              Christian Church. It is centered on the preaching of Christ's Word
              and the Sacrament of Holy Communion. By these means Christ is
              present among us with His grace, granting forgiveness, life and
              salvation to all who seek Him in repentance and faith.
            </p>
            <p className="my-4">
              All are welcome at our services. Participation in Holy Communion
              is limited to those who are members of ULC or of a sister LCMS or
              AALC congregation. Please see Pr. Kind before the service if this
              is your first time at ULC and you would like to commune.
            </p>
            <p className="my-4">
              <strong>Preparing for the Service:</strong> The Liturgy will be
              Divine Service Setting 3 in Lutheran Service Book (LSB)
            </p>
          </div>
          <div className="container mx-auto my-12">
            <h2 className="text-center text-red-700 font-bold text-4xl">
              Additional Opportunities
            </h2>
            <h3 className="my-2 text-center underline">
              Friday Evening Bible Study: TBD
            </h3>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde
              ad, architecto eos ducimus harum fuga? Pariatur iste blanditiis
              modi optio quasi, saepe eum. Impedit atque iste nobis dolor
              commodi!
            </p>
            <p className="my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              cumque blanditiis ut, eveniet sapiente tempora inventore animi
              laboriosam! Autem, nobis cum! Quos quam deserunt laborum fuga nisi
              deleniti tempore delectus!
            </p>
            <h3 className="my-2 text-center underline">
              Women's Bible Study: TBD
            </h3>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde
              ad, architecto eos ducimus harum fuga? Pariatur iste blanditiis
              modi optio quasi, saepe eum. Impedit atque iste nobis dolor
              commodi!
            </p>
            <p className="my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              cumque blanditiis ut, eveniet sapiente tempora inventore animi
              laboriosam! Autem, nobis cum! Quos quam deserunt laborum fuga nisi
              deleniti tempore delectus!
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default worship;
