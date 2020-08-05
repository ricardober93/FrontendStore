import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Dashboard from "../../dashboard/components/Dashboard";
import FormCategory from "../components/FormCategory";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "2fr 3fr",
    gridColumnGap: "90px",
    width: "100%",
    alignContent: "center",
    justifyContent: "flex-start",
    padding: "2em 9em",
  },
  gridItem: {
    display: "grid",
    gridGap: "15px",
  },
  flex: {
    display: "flex",
    width: "100%",
    height:40,
    alignContent: "center",
    justifyContent: "flex-start",
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(3)
  },
  arrow: {
    display: "flex",
    height:40,
    alignContent: "center",
  },
  h2:{
    display: "flex",
    alignContent: "center",
    height:'100%',
    margin:0,
    marginLeft: theme.spacing(2),
    fontWeight:400,
    fontSize: '28px'
  }
}));

export default function CreateCategoty() {
  const classes = useStyles();
  return (
    <Dashboard>
      <section className={classes.flex}>
        <ArrowBackIcon
          className={classes.arrow}
          onClick={() => <Redirect to="/dashboard-product" />}
        />
        <h2 className={classes.h2}>Crear Nueva Categoria</h2>
      </section>
      <section className={classes.gridContainer}>
        <Grid item className={classes.gridItem}>
          <FormCategory />
        </Grid>
        <Grid item className={classes.gridItem}>
          Hola mundo
        </Grid>
      </section>
    </Dashboard>
  );
}
