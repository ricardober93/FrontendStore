import React, { useEffect, useState } from 'react';
import EmptyCart from '../components/EmptyCart';
import Cart from '../components/Cart';
import { getCartsByUser } from '../../providers/CartProvider';
import { useSelector } from 'react-redux';
import { Grid, Container, Divider, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Col } from "react-bootstrap";

const useStyles = makeStyles({
    root: {
      marginTop: '2%',
      marginLeft: '5%',
      marginRight: '5%'
    },
    hr: {
      marginTop: '1%',
      marginLeft: '6%',
      marginRight: '11%',
      backgroundColor: 'grey'
    },
    containerCard: {
      width: '100%',
      display: 'flex',
      maxWidth: '400px',
      margin: 'auto',
      marginTop: '10%'
  },
});


const CartHistoryUser = () => {
    const classes = useStyles();
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);
      
      async function fetchData() {
           await getCartsByUser()
            .then((response) => {
                setCarts(response.data);
            })
    }

      const showAllCarts = (carts) => (
        <Container>
          <Grid xs={12} sm={12} container>
            {carts.map((cart) => (
              <Col md={4}>
                  <Cart
                    key={cart._id}
                    cart={cart}
                  />
              </Col>
            ))}
          </Grid>
        </Container>
      );
    return ( 
    <div>
        <h1 className={classes.root}>Historial de Compras</h1>
        <Divider className={classes.hr}/>

        { carts.length !== 0 ? showAllCarts(carts) : <EmptyCart /> }
    </div> 
    );
}
 
export default CartHistoryUser;