import React from 'react'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'

class PlaysContainer extends React.Component {
    render() { 
        if (this.props.currentUser) {
            return (
                <Container>
                    <h1>PLAYS</h1>
                </Container>
            )
        } else {
            return <p>Sign up or sign in to see this page.</p>
        }
    }
}

const mapStateToProps = ({ userGames, currentUser }) => {
    return {
        userGames,
        currentUser
    }
}

export default connect(mapStateToProps)(PlaysContainer)