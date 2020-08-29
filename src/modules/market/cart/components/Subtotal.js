import React from "react";
import { useSelector } from "react-redux";
import { Button, Modal, Card } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FormMercadoPago from './FormMercadoPago'

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
  const messages = useSelector((state) => state.language.messages.cart);
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmBuy = async () => {
    handleOpen() 
  };

  return (
    <>
      <FormMercadoPago productsInCart={productsInCart} total={total} handleClose={handleClose} open={open}/>
      <p>Envio: +52.000</p>
      <p className="panel-envio-m">Total Pedido:</p>
      <p>Total: $ {total}</p>
      <Button variant="contained" color="secondary" fullwidth onClick={confirmBuy}>
        {messages["buy"]}
      </Button>
    </>
  );
};

export default Subtotal;
