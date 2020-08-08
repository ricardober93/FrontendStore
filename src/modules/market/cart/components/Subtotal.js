import React from "react";
import { useSelector } from "react-redux";
import { Button} from "@material-ui/core";
//services
import { newCart } from "../../providers/CartProvider";

const Subtotal = ({ productsInCart, total }) => {
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
    <>
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
