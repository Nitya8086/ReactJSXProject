import React,{useContext} from 'react'
import { Card,Button} from 'react-bootstrap';
import CartContext from '../../context/CartContext';


export default function ProductItem(props) {

  const ctx = useContext(CartContext);

  const addCartToHandeler = () =>{
    ctx.addItem({...props,Quantity : 1});
   
  };
  return (
   
    <Card>
      <Card.Img variant="top" src= {props.imageUrl}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>
            <span>${props.price}</span>
          </Card.Subtitle>
              <Button variant="primary" onClick={addCartToHandeler}>Add to Cart</Button>
      </Card.Body>
    </Card>

  
  );
 
}
