import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import { useSelector } from "react-redux";
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
  const messages = useSelector((state) => state.language.messages.nabvar_home);
  return (
    <Grid className={classes.container}>
      <nav className={classes.Menu}>
        <Link to="/dashboard">
          <a className={classes.item}>{messages['overview']}</a>
        </Link>
        <Link to="/dashboard-product">
          <a className={classes.item}>{messages['products']}</a>
        </Link>
        <Link to="dashboard-shipping">
          <a className={classes.item}>{messages['shipping']}</a>
        </Link>
        <Link to="#">
          <a className={classes.item}>{messages['payment']}</a>
        </Link>
      </nav>
    </Grid>
  );
}
