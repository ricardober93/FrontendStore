import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "flex",

    height: "100vh",
    width: "100vw",
  },
  Column2:{
      display:'grid',
      width: '100%',
      alignSelf:'start'
  }
}));
export default function Dashboard({children}) {
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
