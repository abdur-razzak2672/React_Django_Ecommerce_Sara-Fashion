import React from 'react'
import {Nav,Navbar,Container, FormControl, Form ,Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (
    <header>
        <Navbar className = "navItem" variant = "dark"  expand="xl" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Sara Fashion</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <LinkContainer to="/">
                            <Nav.Link className = "me-5">Home</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/about" className = "me-5">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <Form className="d-flex ml-3">
                            <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2 w-50   rounded"
                            aria-label="Search"
                            />
                            <Button className='btn btn-success rounded'>Search</Button>
                        </Form>
                        
                    </Nav>
                    <div className="d-flex"  text='dark'>
                            <LinkContainer variant = "dark" to="/cart">
                                <Navbar.Brand><i className = "fas fa-shopping-cart"></i>Cart</Navbar.Brand>
                            </LinkContainer>
                                
                            <LinkContainer to="/login">
                                <Navbar.Brand><i className = "fas fa-user"></i>Login</Navbar.Brand>
                            </LinkContainer>
                        </div>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
      
    </header>
  )
}

export default Header;
