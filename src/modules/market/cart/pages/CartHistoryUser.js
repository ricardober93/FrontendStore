import React, { useEffect, useState } from 'react';
import EmptyCart from '../components/EmptyCart';
import Cart from '../components/Cart';
import { getCartsByUser } from '../../providers/CartProvider';
import { useSelector } from 'react-redux';
import { Grid, Container, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      marginTop: '5%',
      marginLeft: '5%',
      marginRight: '5%'
    },
    hr: {
      marginTop: '1%',
      marginLeft: '6%',
      marginRight: '11%',
      backgroundColor: 'grey'
    }
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
          <Grid container>
            {carts.map((cart) => (
              <Grid xs={4} sm={4}>
                  <Cart
                    key={cart._id}
                    cart={cart}
                  />
              </Grid>
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