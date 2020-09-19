import React, { Fragment } from 'react';
import { ProductCart } from './Product';
import { Grid, Typography, Container, Card, CardMedia, CardContent, CardHeader, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from 'react-bootstrap';
import moment from 'moment'
// import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const useStyles = makeStyles({
    state: {
        textAlign: 'justify',
        textAlign: 'center',
    },
    totalPrice: {
        textAlign: 'justify',
        textAlign: 'right',
    },
    icon: {
        textAlign: 'justify',
        textAlign: 'right',
        marginLeft: '13%',
        marginTop: '47%',
    },
    contenido: {
        textAlign: 'justify',
        textAlign: 'initial',
        textTransform: "capitalize"
    },
    media: {
        width: '100%',
        height: '325px',
        paddingTop: '56.25%', // 16:9
    },
    containerCard: {
        width: '350px',
        height: '100%',
        margin: 'auto',
        marginTop: '10%',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: '3%'
    },
    /*circulo: {
        width: '100px',
        height: '100px',
        mozBorderRadius: '50%',
        webkitBorderRadius: '50%',
        borderRadius: '50%',
        background: '#603085',
        marginLeft: '60%'
   }*/

});

const Cart = ({ cart }) => {
    const classes = useStyles();
    const { products, order_date, total_price, state, total_discount, created_at } = cart

    const showAllProductsInCart = (products) => (
        products.map(product => (
            <ProductCart
                key={product._id}
                product={product}
            />
        ))
    );

    return (
        <Fragment>
            <Grid xs={12} sm={12} container>
                <Card className={classes.containerCard} elevation={15} variant="elevation">
                    <Grid className='product-text' xs={12} sm={12}>
                        <div className='primary-text' className={classes.state}>
                            <Typography className="mt-3" variant="h6" component="p">
                                <strong>Estado: {state}</strong>
                            </Typography>
                        </div>
                        <Typography className="mt-3" variant="h6" component="p">
                            <strong>Fecha: {moment(created_at).format('MM/DD/YYYY, h:mm a')}</strong>
                        </Typography>
                        <CardMedia
                            className={classes.media}
                            image={products[0].image_preview}
                            title=""
                        >
                            {/* <div className={classes.circulo}>
                    <div className={classes.icon}>
                        <LocalShippingIcon color="primary" style={{ fontSize: 40 }}/>
                    </div>
                    </div> */}
                        </CardMedia>

                    </Grid>
                    <CardContent>
                        <Grid xs={12} sm={12} container>
                            <Grid className={classes.contenido} xs={12} sm={6}>
                                <Typography className="mt-3" variant="p" component="p">
                                    Productos: {cart.products.length}
                                </Typography>
                            </Grid>
                            <Grid className={classes.totalPrice} xs={12} sm={6}>
                                <Typography className="mt-3" variant="h6" component="p">
                                    <strong>${total_price}</strong>
                                </Typography>
                                <Typography className="mt-3" variant="h6" component="p">
                                    <strong /*className={classes.discount}*/>{total_discount}% off</strong>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>

                    <section>
                        {/* { cart.products.length !== 0 ? showAllProductsInCart(cart.products) : null } */}
                    </section>
                </Card>
            </Grid>
        </Fragment>
    );
}

export default Cart;