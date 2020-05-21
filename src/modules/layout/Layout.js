import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tienda Virtual</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
