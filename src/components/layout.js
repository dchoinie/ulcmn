import React, { Component } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 1280, padding: `0 1rem` }}>
    <Header />
    {children}
    <Footer />
  </div>
);
