import React from 'react'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import PlaysTable from './PlaysTable'

class PlaysContainer extends React.Component {
    render() { 
        if (this.props.currentUser) {
            return (
                <Container>
                    <PlaysTable />
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