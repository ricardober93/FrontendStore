import Product from './Product';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
  },
}));

const products = [
  {
    id: 1,
    name: 'nombre',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    name: 'nombre',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    name: 'nombre',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    name: 'nombre',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    name: 'nombre',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 6,
    name: 'nombre',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 7,
    name: 'nombre',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 8,
    name: 'nombre',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function Products() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} >
        <Grid container justify="center">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
