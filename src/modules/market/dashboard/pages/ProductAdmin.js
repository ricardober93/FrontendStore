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
      <Grid container className={classes.container} >
      <PanelProduct />
    </Grid>
    </Dashboard>
  );
}
