import React from "react";
import {Link} from "react-router-dom";
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
        <Link to="/dashboard" className={classes.item}>
          Overview
        </Link>
        <Link to="/dashboard-product" className={classes.item}>
          Products
        </Link>
        <Link to="dashboard-shipping" className={classes.item}>
          Shipping
        </Link>
        <Link to="dashbaord-payment" className={classes.item}>
          Payment
        </Link>
      </nav>
    </Grid>
  );
}
