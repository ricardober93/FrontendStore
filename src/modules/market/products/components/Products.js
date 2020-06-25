import Product from "./Product";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList } from "@material-ui/core/";
import Spinner from '../components/Spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  gridList: {
      width: '100%',
      alignContent: 'center',
      justifyContent: 'center'
  },
  center: {
    width: '100%',
    display: 'grid',
    alignContent: 'center',
    justifyContent: 'center'
  }
}));

const products = [
  {
    id: 1,
    name: "nombre",
    category: "categoria",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    name: "nombre",
    category: "categoria",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    name: "nombre",
    category: "categoria",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    name: "nombre",
    category: "categoria",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5,
    name: "nombre",
    category: "categoria",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 6,
    name: "nombre",
    category: "categoria",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 7,
    name: "nombre",
    category: "categoria",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 8,
    name: "nombre",
    category: "categoria",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export default function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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

    </div>
  );
}
