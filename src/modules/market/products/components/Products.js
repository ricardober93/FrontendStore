import Product from "./Product";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function Products(props) {

  const { products } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cols={3} alignItems="center" md={12}>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </GridList>
    </div>
  );
}
