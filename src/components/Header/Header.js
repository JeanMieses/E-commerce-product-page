import { useState } from 'react';
import {Button, Navbar, Nav } from 'react-bootstrap';
import classes from './Header.module.css';
import iconCart from './../../assets/icon-cart.svg';
import Modal from './../UI/Modal';
// import avatar from './../../assets/image-avatar.png';

const Header = (props) => {
 
    return (<header className={classes.header}>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">

                <Navbar.Brand className="order-md-0 order-2" href="#home">Sneakers</Navbar.Brand>
                <Navbar.Toggle   className="border-0 order-md-1 order-0" aria-controls="responsive-navbar-nav" />
                <Button onClick={props.showCart} className="order-2" variant="link"> <img src={iconCart}  alt='cart'/>  </Button>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Collections</Nav.Link>
                        <Nav.Link href="#pricing">Men</Nav.Link>
                        <Nav.Link href="#pricing">Women</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            
        </Navbar>

    </header>)
}


export default Header;