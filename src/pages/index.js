import React from "react";
import SEO from "../components/seo";
import Header from "../components/layout/header";
import Hero from "../components/Hero";
import WorshipWithUs from "../components/worshipWithUs";
import Footer from "../components/layout/footer";

const IndexPage = () => {
  return (
    <>
      <Header color="#fff" />
      <Hero />
      <WorshipWithUs />
      <Footer />
    </>
  );
};

export default IndexPage;
