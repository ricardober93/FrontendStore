import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{height: "790px"}}>{children}</main>
      <Footer />
    </>
  );
}
