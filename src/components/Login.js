import React from 'react'
import { connect } from 'react-redux'

const handleOnSubmit = (action) => {

}

const handleOnChange = (action) => {
    
}

const Login = () => {
    return (
        <form onSubmit={this.handleOnSubmit}>
            <input name="username" type="text" onChange={this.handleOnChange} />
            <input name="password" type="text" onChange={this.handleOnChange} />
            <input type="submit" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}

export default connect(mapStateToProps, )(Login)