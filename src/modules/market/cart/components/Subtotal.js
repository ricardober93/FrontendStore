import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Container, Button } from "react-bootstrap";
//services
import { newCart } from "../../providers/CartProvider";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Subtotal = ({ productsInCart, total }) => {
  const classes = useStyles();
  const messages = useSelector((state) => state.language.messages.cart);
  const user = useSelector((state) => state.user.user);

  const confirmBuy = async () => {
    let data = {
      products: productsInCart,
      total: total,
      user_id: user.id,
    };

    // console.log(data)
    newCart(data);
  };

  return (
    <Container>
      <p>Envio: +52.000</p>
      <p>Total Pedido:</p>
      <p>Total: $ {total}</p>
      <Button
        type="button"
        variant="success"
        size="lg"
        block
        onClick={confirmBuy}
      >
        {messages["buy"]}
      </Button>
    </Container>
  );
};

export default Subtotal;
