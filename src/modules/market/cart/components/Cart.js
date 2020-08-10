import React from 'react';
import { ProductCart } from './Product';
import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      marginTop: '5%',
      marginRight: '6%',
      width: 'auto'
    },
    totalPrice: {
        marginLeft: '80%'
    }
});

const Cart = ({ cart }) => {
    const classes = useStyles();
    const { products, order_date, total_price, state, total_discount } = cart
    console.log(cart);
    const showAllProductsInCart = (products) => (
        products.map(product => (
                <ProductCart
                    key={product._id}
                    product={product}
                />
        ))
    );
    return ( 
        <div>
            <Card className={classes.root} elevation={15} variant="elevation">
                <Typography className="mt-3" variant="h6" component="p">
                    <strong>{order_date}</strong>
                </Typography>
                <Typography className="mt-3" variant="h6" component="p">
                    <strong>{state}</strong>
                </Typography>
                <Card.Img
                    variant="top"
                    className="bd-placeholder-img"
                    width="100%"
                    height="225"
                    src={product.image_preview[0]}
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img">
                </Card.Img>
                <Typography className={classes.totalPrice}variant="h6" component="p">
                    <strong>${total_price}</strong>
                </Typography>
                <Typography className={classes.totalPrice}variant="h6" component="p">
                    <strong>${total_discount}</strong>
                </Typography>
                <section>
                    {/* { cart.products.length !== 0 ? showAllProductsInCart(cart.products) : null } */}
                </section>
            </Card>
        </div>
    );
}
 
export default Cart;