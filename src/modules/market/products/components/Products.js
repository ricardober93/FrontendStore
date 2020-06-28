import Product from "./Product";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList } from "@material-ui/core/";
import Spinner from '../components/Spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3)
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  gridList: {
      width: '100%',
      alignContent: 'center',
      justifyContent: 'center',
  },
  center: {
    width: '100%',
    display: 'grid',
    alignContent: 'center',
    justifyContent: 'center'
  }
}));

export default function Products(props) {

  const { products } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
<<<<<<< HEAD
        { products ?
          <GridList className={classes.gridList} col={3} md={8} sm={12}>
          { products.map((product) => (
          <Product key={product.id} product={product} />
          ))}
          </GridList> :
          <section  className={classes.center}>
          <Spinner/>
          </section>
        }

=======
      <GridList cols={3} alignItems="center" md={12}>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </GridList>
>>>>>>> 2640e4fcbc179105ddacc2c224181434e5a8e8a9
    </div>
  );
}
