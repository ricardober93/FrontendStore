import Product from "./Product";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList } from "@material-ui/core/";
import Spinner from "../components/Spinner";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  gridList: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  center: {
    width: "100%",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
  },
}));

export default function Products(props) {
  const { products } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cols={3} className={classes.gridList} md={12}>
        {products.map((product) =>
          product ? (
            <Product key={product._id} product={product} />
          ) : (
            <>
              <Skeleton height={60} width="80%" style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={30} width="70%" />
              <Skeleton animation="wave" height={30} width="40%" />
            </>
          )
        )}
      </GridList>
    </div>
  );
}
