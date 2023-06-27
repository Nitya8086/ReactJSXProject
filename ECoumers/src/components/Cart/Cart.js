import React from 'react';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import CartItem from './CartItem';
import { Container,Row,Col,Table } from 'react-bootstrap';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartItem = cartCtx.items.map((item) =>{
     return(
      <CartItem
      key = {item.id} 
      id = {item.id}
      title = {item.title}
      price = {item.price}
      image = {item.imageUrl}
      Quantity = {item.Quantity}
      />
     )
  })
  
  return (
    <Container>
      <Row>
        <Col>
         Cart
        </Col>
      </Row>
      <Row>
        <Col>
        <Table>
          <thead>
            <tr>
              <th>
                Item
              </th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cartItem}
          </tbody>
        </Table>
        </Col>
      </Row>
     {cartItem}
     </Container>
    
  );
}

export default Cart;