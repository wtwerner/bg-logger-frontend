import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const GlobalNavbar = ({ logout }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">BG Logger</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/discover">Discover</Nav.Link>
                    <Nav.Link href="/sessions">Sessions</Nav.Link>
                    <NavDropdown title="Collection" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/owned">Owned</NavDropdown.Item>
                        <NavDropdown.Item href="/wishlist">Wishlist</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default GlobalNavbar