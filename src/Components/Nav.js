 /* eslint-disable */ 
import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../contextAPI';

const Nab = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
        <Navbar.Brand href="#">React-Context API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Link to='/'>Products</Link>
        </Nav>
        {/* <Nav>
            
                   <Link style={{color:'mediumspringgreen'}} eventKey={2} to='/cart'>My Cart ()</Link>
               
        </Nav> */}
        <Nav>
            <ProductConsumer>
                {(value)=>{
                    return <Link style={{color:'mediumspringgreen'}} eventKey={2} to='/cart'>My Cart ({value.cart.length})</Link>
                }}
            </ProductConsumer>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Nab;