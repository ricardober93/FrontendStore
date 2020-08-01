import React from "react";
import {Link} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {Grid} from "@material-ui/core/";
import '../css/dashboard.css'
const useStyles = makeStyles((theme) => ({
  header:{
    display:"grid",
    height: 550,
    width:"100%"
  },
  headerMenu:{
    display:"grid",
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <Grid className={classes.header}>
      <nav className={classes.headerMenu}>
      <h3 className="titleNav center">Dashboard</h3>
        <Link className="itemNav center" to="/dashboard">
          Overview
        </Link>
        <Link className="itemNav center" to="/dashboard">
          Products
        </Link>
        <Link className="itemNav center" to="/dashboard">
          Shipping
        </Link>
        <Link className="itemNav center" to="/dashboard">
          Payments
        </Link>
        <h3 className="titleNav center">Setting</h3>
        <Link className="itemNav center" to="#">
           Team
        </Link>
        <Link className="itemNav center" to="#">
           Performance
        </Link>
      </nav>
    </Grid>
  );
}
