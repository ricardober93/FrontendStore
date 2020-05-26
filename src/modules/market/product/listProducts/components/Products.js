import Product from './Product';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 80,
  },
}));

const products = [
  {
    id: 1,
    name: 'nombre1',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    name: 'nombre2',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    name: 'nombre3',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    name: 'nombre4',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    name: 'nombre5',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 6,
    name: 'nombre6',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 7,
    name: 'nombr7',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 8,
    name: 'nombre8',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 9,
    name: 'nombre9',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 10,
    name: 'nombre10',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 11,
    name: 'nombre11',
    category: 'categoria',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function Products() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} container justify="center">
        {products.length !== 0
          ? products.map(
              (product) => (
                console.log(product),
                (<Product key={product.id} product={product} />)
              )
            )
          : null}
      </Grid>
    </Grid>
  );
}
