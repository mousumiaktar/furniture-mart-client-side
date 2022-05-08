import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOutButton = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar className='menu-bar' collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="/home#inventory">Inventories</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} to="/manageitem">Manage-item</Nav.Link>
                                <Nav.Link as={Link} to="/addinventory">Add-New-Items</Nav.Link>
                                <Nav.Link as={Link} to="/myitems">My-Items</Nav.Link>
                                </>
                            }
                        </Nav>
                        <Nav>
                            {
                                user?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOutButton}>sign out</button>
                                :
                                <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                            }
                            {
                                !user &&
                                <Nav.Link as={Link} to="/register">
                                Register
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;