import React, {useState, useEffect } from 'react';
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
import { Image } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    borderBottom:"1px solid #000000",
    padding:"1.1em"
  },
  price:{
    Height:'15px',
    display:"flex",
    justifyContent:"center",
    alignContent:"flex-start"
  },
  text:{
    Height:'15px',
    lineHeight:'15px',
    fontSize:'1em',
    marginLeft:'.9em'
  },
  description:{
    fontSize:'.7em'
  },
  delete:{
    backgroundColor: "transparent",
    color: 'red',
    marginLeft:'.7em'
  },
  buttons:{
    display:"flex",
    alignContent:"center",
    width:"auto",
  }
}));

const Product = ({ product, setSubtotal, subtotal, setTotal }) => {
  const classes = useStyles();
  const messages = useSelector(state => state.language.messages.cart);
  const productsInCart = useSelector(state => state.cart.products);
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
      product.subtotal = product.quantity * product.price;
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
              if(product._id !== id){
                carts.push(product)
              }
            })
            console.log(carts)
            localStorage.setItem('cart', JSON.stringify(carts))
            window.location.href = '/cart'
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
      messages['delete_question'],
      '',
      'warning',
      messages['delete_confirm'],
      messages['delete_cancel'],
      'confirmRemoveProduct',
      id
    )
  };

  const confirmBuyProduct = () => {
    SweetAlert(
      messages['buy_question'],
      '',
      'warning',
      messages['buy_confirm'],
      messages['buy_cancel'],
      'confirmBuyProduct'
    )
  };

  const showSubtotal = () => {
    let index = productsInCart.indexOf(product);
    subtotal.splice(index, 1, (product.price * product.quantity).toFixed(2))
    setSubtotal(subtotal)
    return (product.price * product.quantity).toFixed(2)
  };

  return (
    <Grid className={classes.root} Container  spacing={2}>
        <Grid item xs={4} sm={3}>
          <Image
            className="img-fluid rounded mb-3 mb-md-0"
            src={product.image_preview}
            width={150}
            height={150}
            alt=""
          />
        </Grid>
        <Grid xs={8} sm={8} container>
        <div className={classes.price} >
          <h3 className={classes.text} style={{ textTransform: "capitalize" }}>{product.name}</h3>
          <p className={classes.text}>$ {product.price}</p>
          <p className={classes.text}>Subtotal: $ {showSubtotal()}</p>
        </div>
          <p className={classes.description}>{product.description}</p>
          <Grid item xs={12} sm={12} className={classes.buttons}>
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button
                startIcon={<RemoveCircleOutlineIcon />}
                onClick={decrement}
              ></Button>
              <Button>{product.quantity}</Button>
              <Button
                startIcon={<AddCircleOutlineIcon />}
                onClick={increment}
              ></Button>
            </ButtonGroup>
              <Button
                className={classes.delete}
                onClick={() => confirmRemoveProduct(product._id)}
              >{messages['delete']}</Button>
          </Grid>
        </Grid>
    </Grid>
  );
}

// PropTypes
Product.propTypes = {
  product: object.isRequired
}

export default Product;