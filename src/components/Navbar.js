import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'
import { logout } from "../actions/currentUser.js"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const GlobalNavbar = ({ logout, currentUser }) => {
    const authButton = () => {
        if (currentUser === null) {
            return <Button variant="secondary" as={Link} to="/login">Login</Button>
        } else {
            return <Button variant="secondary" onClick={ logout }>Logout</Button>
        }
    }

    return (
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" >
            <Navbar.Brand as={Link} to="/" className="mx-3">BG Logger</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/discover">Discover</Nav.Link>
                    <Nav.Link as={Link} to="/sessions">Sessions</Nav.Link>
                    <NavDropdown title="Collection" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/owned">Owned</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/wishlist">Wishlist</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Form inline className="mx-3">
                {authButton()}
            </Form>
        </Navbar>
    )
}

function mapStateToProps(state) {
    return { currentUser: state.currentUser }
  }

export default connect(mapStateToProps, { logout } )(GlobalNavbar)