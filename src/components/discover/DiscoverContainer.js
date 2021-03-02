import React from 'react'
import Container from 'react-bootstrap/Container'
import DiscoverForm from './DiscoverForm'
import DiscoverTable from './DiscoverTable'
import { connect } from 'react-redux'

class DiscoverContainer extends React.Component {
    render() {
        if (this.props.currentUser) {
            return (
                <Container className="d-grid gap-3">
                    <div/>
                    <DiscoverForm />
                    <DiscoverTable games={this.props.games.discover} />
                </Container>
            )
        } else {
            return <p>Sign up or sign in to see this page.</p>
        }
    }
}

const mapStateToProps = ({ games, currentUser }) => {
    return {
        games,
        currentUser
    }
}

export default connect(mapStateToProps)(DiscoverContainer)