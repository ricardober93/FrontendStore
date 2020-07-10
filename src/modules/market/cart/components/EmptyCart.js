import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Figure, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
//import carrito from '../../../../assets/carrito.png';

const EmptyCart = () => {

  const messages = useSelector(state => state.language.messages);
  const currentColors = useSelector(state => state.customization.colors);

  return (
    <Container>
      <Figure >
        <Figure.Image
          width={170}
          src={null} // no funciona
        />
        <Figure.Caption >
          <h3 style={{ color:currentColors.textPrimary}} >{messages['cart_empty']}</h3>
        </Figure.Caption>
        <Link to='/'>
          <Button variant="danger">{messages['cart_back']}</Button>
        </Link>
      </Figure>
    </Container>
  )
}

export default EmptyCart
