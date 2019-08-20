import React from "react";
import SEO from "../components/seo";
import Header from "../components/layout/header";
import Hero from "../components/Hero";
import About from "../components/about";
import WorshipWithUs from "../components/worshipWithUs";
import Support from "../components/support";
import Footer from "../components/layout/footer";

const IndexPage = () => {
  return (
    <>
      <Header color="#fff" />
      <Hero />
      <About />
      <WorshipWithUs />
      <Support />
      <Footer />
    </>
  );
};

export default IndexPage;
