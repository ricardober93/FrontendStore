import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: 60,
    width: "100%",
    justifySelf: "flex-start",
  },
  Menu: {
    width: 500,
    display: "flex",
    alignContent: "center",
    justifyContent: "space-around",
    justifySelf: "flex-end",
    color: "#969696",
  },
  item: {
    color: "#969696",
    fontSize: "1.3em",
    textDecoration: "none",
    textTransform: "none",
    display: "flex",
    alignSelf: "center",
  },
}));

export default function NabvarHome() {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <nav className={classes.Menu}>
        <Link href="/dashboard">
          <a className={classes.item}>Overview</a>
        </Link>
        <Link href="/dashboard-product">
          <a className={classes.item}>Products</a>
        </Link>
        <Link href="dashboard-shipping">
          <a className={classes.item}>Shipping</a>
        </Link>
        <Link href="#">
          <a className={classes.item}>Payment</a>
        </Link>
      </nav>
    </Grid>
  );
}
