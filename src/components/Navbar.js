import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { logout } from "../actions/currentUser.js"
import { connect } from 'react-redux'

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
            <Form inline>
                <Button variant="outline-success" onClick={ logout }>Logout</Button>
            </Form>
        </Navbar>
    )
}

export default connect(null, { logout } )(GlobalNavbar)