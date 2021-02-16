import React from 'react'
import Container from 'react-bootstrap/Container'
import OwnedTable from './OwnedTable'
import { connect } from 'react-redux'

class OwnedContainer extends React.Component {
    render() {
        if (this.props.currentUser) {
            return (
                <Container>
                    <OwnedTable userGames={this.props.userGames.owned} />
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

export default connect(mapStateToProps)(OwnedContainer)