import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { logout } from '../../actions/currentUser';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutButton from '../buttons/LogoutButton';
import LoginButton from '../buttons/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

const GlobalNavbar = () => {
    const { isLoading, isAuthenticated } = useAuth0();

    const authButton = () => {
        if (isLoading) {
            return <Button>Loading...</Button>;
        }

        return isAuthenticated ? <LogoutButton /> : <LoginButton />;
    };

    return (
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" className="mb-3">
            <Navbar.Brand as={Link} to="/" className="mx-3">
                BG Logger
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/discover">
                        Discover
                    </Nav.Link>
                    <Nav.Link as={Link} to="/plays">
                        Plays
                    </Nav.Link>
                    <NavDropdown title="Collection" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/owned">
                            Owned
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/wishlist">
                            Wishlist
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/friends">
                        Friends
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Form inline className="mx-3">
                {authButton()}
            </Form>
        </Navbar>
    );
};

function mapStateToProps(state) {
    return { currentUser: state.currentUser };
}

export default connect(mapStateToProps, { logout })(GlobalNavbar);
