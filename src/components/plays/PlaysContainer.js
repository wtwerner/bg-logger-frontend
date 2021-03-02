import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import PlaysTable from './PlaysTable'

class PlaysContainer extends React.Component {
    render() { 
        if (this.props.currentUser) {
            return (
                <Container>
                    <Link to="/plays/new">
                        <Button>New Play</Button>
                    </Link>
                    <PlaysTable userPlays={this.props.userPlays} ownedGames={this.props.games.owned} />
                </Container>
            )
        } else {
            return <p>Sign up or sign in to see this page.</p>
        }
    }
}

const mapStateToProps = ({ currentUser, userPlays, games }) => {
    return {
        currentUser,
        userPlays,
        games
    }
}

export default connect(mapStateToProps)(PlaysContainer)