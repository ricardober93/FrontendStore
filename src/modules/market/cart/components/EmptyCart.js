import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Figure, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../styles/EmptyCart.css';
//import carrito from '../../../../assets/carrito.png';

const EmptyCart = () => {

  const messages = useSelector(state => state.language.messages.cart);
  const currentColors = useSelector(state => state.customization.colors);

  return (
    <Container className="emptyCart">
      <Figure className="emptyCart-text-center">
        <Figure.Image
          width={170}
          src={null} // no funciona
        />
        <Figure.Caption >
          <h3 style={{ color:currentColors.textPrimary}} >{messages['empty']}</h3>
        </Figure.Caption>
        <Link to='/'>
          <Button className="emptyCart-button" variant="danger">{messages['back']}</Button>
        </Link>
      </Figure>
    </Container>
  )
}

export default EmptyCart
