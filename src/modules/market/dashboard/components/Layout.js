import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "4fr 5fr",
    gridGap:0,
    height: "100vh",
    width: "100vw",
  },
  Column2:{
      display:'grid',
      width: 780,
      alignSelf:'start'
  }
}));
export default function Layout({children}) {
    const classes = useStyles();
  return (
    <section className={classes.gridContainer}>
      <Sidebar />
      <div className={classes.Column2}>
      <Nav />
      <main className="main p-layout"> {children} </main>
      </div>
    </section >
  );
}
