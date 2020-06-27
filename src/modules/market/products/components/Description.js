import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    backgroundColor: "#000",
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const Description = (props) => {

  const { product } = props;
  const classes = useStyles();
  const [value, setValue] = useState(product.raiting);
  const [quantity, setQuantity] = useState(0);

  return (
    <Container>
      <Grid container>
        <Grid xs={12} sm={6}>
          <ProductImage product={product} />
        </Grid>
        <Grid xs={12} sm={6}>
          <Typography>Categoria: {product.category.name}</Typography>
          <Typography>Marca: {product.brand.name}</Typography>
          <Typography variant="h3">{product.name}</Typography>
          <Box mb={3} borderColor="transparent">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <Typography variant="subtitle1">{product.description}</Typography>
          <Grid container>
            <Grid mt={3} xs={12} sm={2}>
              <Typography variant="subtitle1">Cantidad</Typography>
            </Grid>
            <Grid xs={12} sm={4}>
              <ButtonGroup disableElevation variant="contained" color="primary">
                <Button
                  startIcon={<RemoveCircleOutlineIcon />}
                  onClick={() => {
                    quantity > 0 ? setQuantity(quantity - 1) : null;
                  }}
                ></Button>
                <Button>{quantity}</Button>
                <Button
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={() => setQuantity(quantity + 1)}
                ></Button>
              </ButtonGroup>
            </Grid>
            <Grid mt={3} xs={12} sm={6}>
              <Button
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                color="primary"
              >
                Agregar al carrito
              </Button>
            </Grid>
            <Grid xs={12} sm={12}>
              <Button variant="contained" fullWidth color="primary">
                Comprar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Description;
