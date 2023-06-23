import React from 'react';
import Cart from '../Cart/Cart';


import {Navbar,Container,Badge,Nav,Dropdown} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const  Header = ()  => {
  return (
    <>
       <Navbar bg="dark" variant = "dark" style = {{height :80}}>
        <Container>
          <Navbar.Brand className = "m-auto">
            <Link to='/'>Home</Link>
            </Navbar.Brand>
            <Navbar.Brand className = "m-auto">
            <Link to='/about'>About</Link>
            </Navbar.Brand>
            <Navbar.Brand className = "m-auto">
            <Link to='/store'>Store</Link>
            </Navbar.Brand>
           

          <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <Cart/>
            </Dropdown.Menu>
            </Dropdown>
            </Nav>
        </Container>
      </Navbar>
      </>
      );
}
export default Header;
