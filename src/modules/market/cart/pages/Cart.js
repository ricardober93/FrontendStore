import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Button } from "@material-ui/core";
import Product from "../components/Product";
import EmptyCart from "../components/EmptyCart";
import Subtotal from "../components/Subtotal";
import "../styles/Cart.css";
import PanelEnvio from "../components/PanelEnvio";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "2em",
  },
  gridSection: {
    display: "grid",
    gridTemplateColumns: "6fr 2fr",
    gridGap: "1.4em",
  }
}));

const Cart = () => {
  const classes = useStyles();
  const productsInCart = useSelector((state) => state.cart.products);
  const messages = useSelector((state) => state.language.messages.cart);
  const [subtotal, setSubtotal] = useState([]);
  const [total, setTotal] = useState(
    productsInCart.reduce(
      (sum, product) => parseFloat(sum) + parseFloat(product.subtotal),
      0
    )
  );

  const showAllProductsInCart = (products) =>
    products.map((product) => (
      <Product
        key={product._id}
        product={product}
        subtotal={subtotal}
        setSubtotal={setSubtotal}
        setTotal={setTotal}
      />
    ));
  return (
    <Fragment>
      <Container className={classes.gridContainer}>
        <PanelEnvio />
        <h2 className="my-4 cart-title">
          {messages["my"]} <strong>{messages["cart"]}</strong>
        </h2>
        <section className={classes.gridSection}>
          <div>
            {productsInCart.length !== 0 ? (
              showAllProductsInCart(productsInCart)
            ) : (
                <EmptyCart />
              )}
          </div>
          <div>
            <div className="cart-pedido">
              <h3>Resumen del Pedido:</h3>
              {productsInCart.length !== 0 ? (
                <Subtotal productsInCart={productsInCart} total={total} />
              ) : null}
            </div>
          </div>
        </section>
      </Container>
    </Fragment>
  );
};

export default Cart;
