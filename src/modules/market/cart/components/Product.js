import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { object } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// Redux
import { updateCartAction, removeProductCartAction } from '../../store/CartAction';

const Product = ({ product, setSubtotal, subtotal, setTotal }) => {

  const messages = useSelector(state => state.language.messages);
  const productsInCart = useSelector(state => state.cart.productsCart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setTotal(newTotal(productsInCart))
  }, [])

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      product.quantity = quantity - 1
      let index = productsInCart.indexOf(product);
      productsInCart.splice(index, 1, product)
      setTotal(newTotal(productsInCart))
      dispatch(updateCartAction(productsInCart));
    }
  };

  const increment = () => {
      setQuantity(quantity + 1);
      product.quantity = quantity + 1;
      let index = productsInCart.indexOf(product);
      productsInCart.splice(index, 1, product)
      setTotal(newTotal(productsInCart))
      dispatch(updateCartAction(productsInCart));
  };

  const newTotal = (productsInCart) => {
    let total = 0.0;
    total = productsInCart.reduce((a, b) => parseFloat(a) + parseFloat(b.price * b.quantity), 0)
    return total.toFixed(2)
  };

  const SweetAlert = (title, text, icon, confirm, cancel, type, id) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirm,
      cancelButtonText: cancel,
    }).then((result) => {
      if (result.value) {
        switch (type) {
          case 'confirmRemoveProduct':
            dispatch(removeProductCartAction(id));
            Swal.fire(
              'Eliminado!',
              'El producto fue eliminado de la lista',
              'success'
            )
            let carts = []
            productsInCart.map((product) => {
              if(product.id !== id){
                carts.push(product)
              }
            })
            setTotal(newTotal(productsInCart))
            localStorage.setItem('cart', JSON.stringify(carts))
            window.location.href = "/cart";
            break;
          case 'confirmBuyProduct':
            console.log('Comprado');
            break;
          default:
            break;
        }
      }
    });
  }

  const confirmRemoveProduct = (id) => {
    SweetAlert(
      messages['cart_product_delete_question'],
      '',
      'warning',
      messages['cart_product_delete_confirm'],
      messages['cart_product_delete_cancel'],
      'confirmRemoveProduct',
      id
    )
  };

  const confirmBuyProduct = () => {
    SweetAlert(
      messages['cart_product_buy_question'],
      '',
      'warning',
      messages['cart_product_buy_confirm'],
      messages['cart_product_buy_cancel'],
      'confirmBuyProduct'
    )
  };

  const showSubtotal = () => {
    let index = productsInCart.indexOf(product);
    subtotal.splice(index, 1, (product.subtotal * product.quantity).toFixed(2))
    setSubtotal(subtotal)
    return (product.subtotal * product.quantity).toFixed(2)
  };
/*  
    <Button
      className="btn btn-primary mr-1"
      onClick={() => confirmBuyProduct()}
    >{messages['cart_product_buy']}</Button>
    */

  return (
    <Fragment>
      <Row>
        <Col md={3}>
          <Image
            className="img-fluid rounded mb-3 mb-md-0"
            src={product.images[0].image}
            width={250}
            height={250}
            alt=""
          />
        </Col>
        <Col md={9}>
          <h3 style={{ textTransform: "capitalize" }}>{product.name}</h3>
          <p>$ {product.price}</p>
          <p>Subtotal: $ {showSubtotal()}</p>
          <p>{product.description}</p>
          <Grid xs={12} sm={4}>
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button
                startIcon={<RemoveCircleOutlineIcon />}
                onClick={decrement}
              ></Button>
              <Button>{quantity}</Button>
              <Button
                startIcon={<AddCircleOutlineIcon />}
                onClick={increment}
              ></Button>
              <button
                className="btn btn-danger ml-3"
                onClick={() => confirmRemoveProduct(product.id)}
              >{messages['cart_product_delete']}</button>
            </ButtonGroup>
          </Grid>
          
        </Col>
      </Row>
      <hr />
    </Fragment>
  );
}

// PropTypes
Product.propTypes = {
  product: object.isRequired
}

export default Product;