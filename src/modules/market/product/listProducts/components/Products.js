import Product from './Product';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: 60,
  },
  girdlist: {
    justifyContent: 'space-between',
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
    <div container className={classes.root}>
      <GridList className={classes.girdlist}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </GridList>
    </div>
  );
}
