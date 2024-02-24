import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Badge, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux'
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBarTop = () => {
    const cartData = useSelector(state => state.addCart)

    useEffect(()=>{

    },[cartData])
    return (
        <Navbar className='navBar' sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='navHeading'>
                    <span><i className="fa fa-duotone fa-suitcase"></i></span><span className='ms-3'><b>MART</b></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className='navItem'>
                        <Nav.Link href="/home" className='pe-5'>Home</Nav.Link>
                        <Nav.Link href="/shoppingpage" className='pe-5'>Shop</Nav.Link>
                        <Nav.Link className='pe-5'><Link to={'/cart'} style={{ textDecoration: 'none' }}>Cart</Link></Nav.Link>
                        <Nav.Link className='pe-3'><FontAwesomeIcon icon={faUser} /></Nav.Link>
                        <Nav.Link className='pe-5'><Link to={'/cart'} style={{ textDecoration: 'none' }}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <Badge bg="primary" className='badgeIcon'>{cartData.length}
                            </Badge>
                            <ToastContainer/>

                        </Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBarTop;
