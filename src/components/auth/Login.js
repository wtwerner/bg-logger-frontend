import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../../actions/loginForm.js"
import { login } from "../../actions/currentUser.js"

const Login = ({ loginFormData, updateLoginForm, login }) => {
    
    const handleOnChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input value={loginFormData.email} name="email" type="text" onChange={handleOnChange} />
            <input value={loginFormData.password} name="password" type="text" onChange={handleOnChange} />
            <input value="Log In" type="submit" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)