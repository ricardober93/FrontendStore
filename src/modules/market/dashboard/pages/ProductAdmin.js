import React from 'react';
import {
  Grid,
} from "@material-ui/core";
import Dashboard from "../components/Dashboard";
import PanelProduct from "../../crud-product/pages/PanelProduct";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container:{
    width:'90%',
    margin: '30px auto'
  },
}));

export default function ProductAdmin() {
  const classes = useStyles();
  return (
    <Dashboard>
<<<<<<< HEAD
<<<<<<< HEAD
      <Grid container className={classes.container} >
=======
>>>>>>> e2b2a4bcb794f1e1db6d6198e5d19a6c63e38162
=======
      <Grid container className={classes.container} >
>>>>>>> 2f0b5ae0670a5d67817372d43a0e0f958ac1f065
      <PanelProduct />
    </Grid>
    </Dashboard>
  );
}
