import React, { Component } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export default ({ children }) => (
  <div style={{ margin: `0 auto` }}>
    <Header />
    {children}
    <Footer />
  </div>
);
