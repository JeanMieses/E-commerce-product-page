import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import {Button, Navbar, Nav } from 'react-bootstrap';
import iconCart from './../../assets/icon-cart.svg';
import classes from './Header.module.css';

const Header = (props) => {
    const ctx = useContext(CartContext);
 
    return (<header className={classes.header}>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Navbar.Toggle  className="border-0 order-md-1 " aria-controls="responsive-navbar-nav" />
                <Navbar.Brand className="order-md-0" href="#home">Sneakers</Navbar.Brand>
                <Button onClick={props.showCart} className={`order-md-2 d-flex flex-column align-items-end justify-content-end ` + classes.btn} variant="link"> <span className={classes.badget}> {ctx.items.length} </span> <img src={iconCart} alt='cart'/>  </Button>
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