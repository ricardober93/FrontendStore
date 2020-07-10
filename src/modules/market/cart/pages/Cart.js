import React, { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import Product from '../components/Product';
import EmptyCart from '../components/EmptyCart';
import Subtotal from '../components/Subtotal';
import '../styles/Cart.css';

const Cart = () => {

  const productsInCart = useSelector(state => state.cart.products);
  const messages = useSelector(state => state.language.messages.cart);
  const [subtotal, setSubtotal] = useState([]);
  const [total, setTotal] = useState(productsInCart.reduce((sum, product) => parseFloat(sum) + parseFloat(product.subtotal), 0));

  const showAllProductsInCart = (products) => (
    products.map((product) => (
      <Product
        key={product._id}
        product={product}
        subtotal={subtotal}
        setSubtotal={setSubtotal}
        setTotal={setTotal}
      />
    ))
  )
  
  return (
    <Fragment>
      <Container>
        <h2 className="my-4">
          {messages['my']} <strong>{messages['cart']}</strong>
        </h2>

        { productsInCart.length !== 0 
          ? <Subtotal 
              productsInCart={productsInCart}
              total={total}
            /> 
          : null
        }

        { productsInCart.length !== 0 ? showAllProductsInCart(productsInCart) : <EmptyCart />}
      </Container>
    </Fragment>
  );
}

export default Cart;