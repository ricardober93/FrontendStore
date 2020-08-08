import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Grid } from "@material-ui/core";
import Dashboard from "../../dashboard/components/Dashboard";
import FormCategory from "../components/FormCategory";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Redirect } from "react-router";
import ListCategory from "../components/ListCategory";

const useStyles = makeStyles((theme) => ({
  arrow: {
    display: "flex",
    height: 40,
    alignContent: "center",
  },
  h2: {
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
    height: "100%",
    margin: 0,
    marginLeft: theme.spacing(2),
    fontWeight: 400,
    fontSize: "20px",
  },
  divider: {
    margin: "2em 0"
  },
  container: {
    maxWidth: "100%"
  }
}));

export default function CreateCategoty() {
  const classes = useStyles();
  return (
    <Dashboard>
      <Grid container col={2}>
        <Grid item xs={1} sm={1} md={1}>
          <ArrowBackIcon
            className={classes.arrow}
            onClick={() => <Redirect to="/dashboard-product" />}
          />
        </Grid>
        <Grid item xs={9} sm={9} md={9}>
          <h2 className={classes.h2}>Crear Nueva Categoria</h2>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container col={2} spacing={2} className={classes.container}>
        <Grid item xs={12} sm={12} md={6}>
          <FormCategory />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ListCategory />
        </Grid>
      </Grid>
    </Dashboard>
  );
}
