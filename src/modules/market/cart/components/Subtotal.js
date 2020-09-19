import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  MenuItem,
  Typography,
  Select
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FormMercadoPago from './FormMercadoPago'
import Swal from 'sweetalert2';
import { newCart } from "../../providers/CartProvider";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Subtotal = ({ productsInCart, total }) => {

  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.language.messages.cart);
  const user = useSelector((state) => state.user.user);
  const [formSuccess, setFormSuccess] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = useState({
    send: '',
    name: user.name,
    address: user.address,
    email: user.email,
  })
  const [store, setStore] = useState({
    ddi: '+54',
    ddn: '11',
    phone: '44131539'
  })

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const confirmBuy = async () => {
    //handleOpen() 
    if (form.name == '' || form.address == '' || form.send === '') {
      return setFormSuccess(true)
    }

    let cartText = ''
    Swal.fire({
      title: messages['question'],
      text: messages['question_email'],
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
      confirmButtonText: messages['button_wpp'],
      cancelButtonText: messages['button_email'],
    }).then(async (result) => {
      if (result.value) {
        productsInCart.map((product) => {
          cartText = cartText + product.name + ':%20$' + product.price + '%20cantidad:' + product.quantity + '%0A'
        });


        if (!user?._id) {
          history.push("/cart");
        }

        let dataCart = {
          products: productsInCart,
          total: total,
          user_id: user._id
        }

        await newCart(dataCart);

        console.log(dataCart);
        setTimeout(() => {
          window.location.href = "https://api.whatsapp.com/send?phone=" + store.ddi + store.ddn + store.phone + "&text=HOME-MARKET%0A%0AHola%20acabo%20de%20realizar%20un%20pedido%0A%0ATipo%20de%20entrega:%20" + form.send + "%0A%0ANombre:%20" + form.name + "%0ADireccion:%20" + form.address + "%0ATOTAL: $%20" + total + "%0A%0A" + cartText;
        }, 1500);
      }

      /* dispatch(removeCartAction());
      localStorage.removeItem('cart');
      setConfirmCart(true) */

    })
  }

  return (
    <>
      {/* <FormMercadoPago productsInCart={productsInCart} total={total} handleClose={handleClose} open={open}/> */}
      <p>Envio: +52.000</p>
      <p className="panel-envio-m">Total Pedido:</p>
      <p>Total: $ {total}</p>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="send"
        value={form.send}
        onChange={handleChange}
      >
        <MenuItem value={'Envio a Domicilio'}>{messages["send_address"]}</MenuItem>
        <MenuItem value={'Retiro en Sucursal'}>{messages["branch_office"]}</MenuItem>
      </Select>
      {formSuccess ? <Typography variant="h6" color="error">*{messages["obligatory"]}</Typography> : null}
      <Button variant="contained" color="secondary" fullwidth onClick={confirmBuy}>
        {messages["buy"]}
      </Button>
    </>
  )
}

export default Subtotal