import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import ProductImage from "./ProductImage";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { setCartAction, setCartReloadAction } from "../../store/CartAction";
import Swal from 'sweetalert2';
import { Redirect } from 'react-router'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '36px',
  },
  category: {
    fontSize: '10px',
    color: '#BCBCBC'
  },
  marca: {
    fontSize: '12px',
    color: '#1b1c1e'
  },
  description: {
    fontSize: '11px',
    color: '#8F8F8F',
    textAlign: 'justify',
    marginBottom: '16px'
  },
  paper: {
    margin: theme.spacing(1),
    backgroundColor: "#000",
  },
  svg: {
    width: 100,
    height: 100,
  },
  button_group: {
    backgroundColor: '#f1f1f1',
    borderRadius: '999px !important',
    marginTop: 20,
    marginBottom: 20,
  },
  quantity: {
    backgroundColor: '#EBEBEB',
  }, price: {
    fontSize: '2.2em',
    textAlign: 'center',
    fontWeight: '500 !important',
    width: '100%',
    margin: 0,
  },
  addCart: {
    backgroundColor: '#FFBA5A',
    color: '#1B1C1E',
    marginBottom: 5,
    borderRadius: '25px !important',
    '&:hover': {
      backgroundColor: '#665C84',
      color: '#fff',
    }
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  comprar: {
    backgroundColor: '#665C84',
    color: '#fff',
    borderRadius: '259px !important',
    '&:hover': {
      backgroundColor: '#574C77',
    }
  }
}));

const Description = (props) => {

  const { product } = props;
  const classes = useStyles();
  const productsInCart = useSelector((state) => state.cart.products);
  const [value, setValue] = useState(product.raiting);
  const [quantity, setQuantity] = useState(1);
  const [redirect, setRedirect] = useState(false);
  let repeat = false

  //utilizar useDispatch y te crea una funcion
  const dispatch = useDispatch();

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addCart = () => {

    productsInCart.map(productCart => {
      if (productCart._id === product._id) {
        repeat = true
      }
    })

    if (!repeat) {
      product.quantity = quantity
      product.subtotal = quantity * product.price
      dispatch(setCartAction(product));
      productsInCart.push(product);
      localStorage.setItem('cart', JSON.stringify(productsInCart))
    } else {
      alert('Ya esta en el carrito')
      setQuantity(1)
    }

  };

  const confirmOrder = () => {

    Swal.fire({
      title: 'Quieres ir al carrito?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ir al carrito!',
      cancelButtonText: 'No, seguir ordenando!'
    }).then((result) => {
      if (result.value) {
        setRedirect(true);
        productsInCart.map(productCart => {
          if (productCart._id === product._id) {
            repeat = true
          }
        })

        if (!repeat) {
          product.quantity = quantity
          product.subtotal = quantity * product.price
          dispatch(setCartAction(product));
          productsInCart.push(product);
          localStorage.setItem('cart', JSON.stringify(productsInCart))
        } else {
          alert('Ya esta en el carrito')
          setQuantity(1)
        }
      } else {
      }
    })

  };

  return (
    <Container>
      <Grid container spacing={3} className={classes.root}>
        <Grid xs={12} sm={6}>
          <ProductImage product={product} />
        </Grid>
        <Grid xs={12} sm={6}>
          <Typography className={classes.category}>Categoria: {product.category.name}</Typography>
          <Typography className={classes.marca}>Marca: {product.brand.name}</Typography>
          <Typography variant="h3">{product.name}</Typography>
          <Box mb={3} borderColor="transparent">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                alert("Podra votar una vez que haya comprado");
              }}
            />
          </Box>
          <Typography className={classes.description} variant="subtitle1">{product.description}</Typography>
          <Grid container spacing={2}>
            <Grid container sm={12}>
              <Grid item xs={12}>
                <ButtonGroup className={classes.button_group} disableElevation variant="outline" color="primary">
                  <Button
                    startIcon={<RemoveCircleOutlineIcon />}
                    onClick={() => decrement}
                  ></Button>
                  <Button className={classes.quantity}>{quantity}</Button>
                  <Button
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={() => setQuantity(quantity + 1)}
                  ></Button>
                </ButtonGroup>
              </Grid>
            </Grid>
            <Grid xs={12} sm={12}
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid xs={12} sm={6}
                container
                item>
                <p className={classes.price}> $ {product.price} </p>
              </Grid>
              <Grid xs={12} sm={6}
                container
                item>
                <Button
                  variant="contained"
                  className={classes.addCart}
                  fullWidth
                  startIcon={<AddShoppingCartIcon />}
                  color="primary"
                  onClick={addCart}
                >
                  Agregar al carrito
              </Button></Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                className={classes.comprar}
                onClick={confirmOrder}
                variant="contained"
                fullWidth
                color="secondary">
                Comprar
              </Button>
              {redirect ? <Redirect to="/cart" /> : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Description;
