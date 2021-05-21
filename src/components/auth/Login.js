import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm, resetLoginForm } from '../../actions/forms.js';
import { login } from '../../actions/currentUser.js';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = ({ loginFormData, updateLoginForm, resetLoginForm, login }) => {
    const history = useHistory();

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value,
        };
        updateLoginForm(updatedFormInfo);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        login(loginFormData);
        resetLoginForm();
        history.push('/');
    };

    return (
        <div style={{ width: '300px' }}>
            <Form onSubmit={handleOnSubmit}>
                <Form.Control
                    value={loginFormData.email}
                    placeholder="email"
                    name="email"
                    type="text"
                    onChange={handleOnChange}
                />
                <Form.Control
                    value={loginFormData.password}
                    placeholder="password"
                    name="password"
                    type="password"
                    onChange={handleOnChange}
                />
                <Button style={{ width: '300px' }} value="Log In" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loginFormData: state.forms.login,
    };
};

export default connect(mapStateToProps, { updateLoginForm, resetLoginForm, login })(Login);
