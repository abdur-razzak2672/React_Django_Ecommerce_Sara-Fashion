import React from 'react'
import {Nav, Navbar,Container, FormControl, Form ,Button,NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import  {addToCart,removeFromCart}  from '../actions/cartActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

import gh from 'react-bootstrap/Offcanvas';
import Offcanvas from 'react-bootstrap/Offcanvas'



function Header() {
    const cart = useSelector(state=>state.cart)
    const {cartItems, loading ,error} = cart

return (
    <>
    {['lg'].map((expand) => (
      <Navbar  key={expand} expand={expand} className="mb-3 bg-success">
        <Container>
          <Nav className="justify-content-start text-light flex-grow-1  pe-3 ">                    
            <LinkContainer to="/register">
                <Nav.Item><i className = "fa fa-phone"></i> Phone : 01734360072</Nav.Item>
            </LinkContainer>
            <LinkContainer to="/login">
                <Nav.Item><i class="fa-solid fa-envelope"></i> Email : razzak172758@gmail.com </Nav.Item>
            </LinkContainer>
          </Nav>
          <Nav className="justify-content-end text-light flex-grow-1  pe-3">                   
            <LinkContainer to="/register">
                <Nav.Item><i className = "fa fa-key"></i> Register</Nav.Item>
            </LinkContainer>
            <LinkContainer to="/login">
                <Nav.Item><i className = "fa fa-lock"></i> Login </Nav.Item>
            </LinkContainer>
          </Nav>
          

        </Container>
      </Navbar>
    ))}
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand >Sara Fashion</Navbar.Brand>         
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              
            >
            
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}> 
                  Sara Fashion
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <LinkContainer to="/">
                    <Nav.Link className = "me-5">Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/catalog">
                    <Nav.Link className = "me-5">Catalog</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link className = "me-5">About Us</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link className = "me-5">Contact Us</Nav.Link>
                  </LinkContainer>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
             
            </Navbar.Offcanvas>
            <div className="d-flex"  text='dark'>                    
              <LinkContainer to="/login">
                  <Navbar.Brand><i className = "fa fa-search"></i> </Navbar.Brand>
              </LinkContainer>
              <LinkContainer to="/login">
                  <Navbar.Brand><i className = "fa fa-heart"></i> </Navbar.Brand>
              </LinkContainer>
              <LinkContainer variant = "dark" to="/cart">
                <Navbar.Brand>
                
                  <i className = "fas fa-shopping-cart"><span className="cartCount">{cartItems.reduce((acc, item) =>  acc+item.qty ,0)}</span></i></Navbar.Brand>
              </LinkContainer>
            </div>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
