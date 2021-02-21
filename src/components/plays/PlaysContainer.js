import React from 'react'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import PlaysTable from './PlaysTable'
import PlayForm from './PlayForm'

class PlaysContainer extends React.Component {
    render() { 
        if (this.props.currentUser) {
            return (
                <Container>
                    <PlaysTable userPlays={this.props.userPlays} />
                    <PlayForm/>
                </Container>
            )
        } else {
            return <p>Sign up or sign in to see this page.</p>
        }
    }
}

const mapStateToProps = ({ games, currentUser, userPlays }) => {
    return {
        games,
        currentUser,
        userPlays
    }
}

export default connect(mapStateToProps)(PlaysContainer)