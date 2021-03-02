import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../../actions/currentUser.js"

const Logout = ({ logout }) => {

    return (
        <form onSubmit={logout}>
            <input value="Logout" type="submit" />
        </form>
    )
}

export default connect(null, { logout } )(Logout)