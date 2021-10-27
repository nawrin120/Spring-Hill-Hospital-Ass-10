import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';



const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" className='nav-container' variant="dark">
                <Container  >
                    <Navbar.Brand href="#home" className='nav-route'>Spring Hill Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home" className='nav-route'>Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/services#services" className='nav-route'>Services</Nav.Link>

                            <Nav.Link as={HashLink} to="/doctors" className='nav-route'>Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/about" className='nav-route'>About Us</Nav.Link>
                            {
                                user?.email ?
                                    <Nav.Link as={Link} to="/login" >  <button onClick={logOut}>Log Out
                                    </button> <small></small> <Navbar.Text className='nav-route'>
                                            Signed in as: {user?.displayName}
                                        </Navbar.Text> </Nav.Link>
                                    :
                                    <Nav.Link as={HashLink} className='nav-route' to="/login">Log In</Nav.Link>

                            }



                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;