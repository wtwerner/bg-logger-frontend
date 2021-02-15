import React from 'react'
import Container from 'react-bootstrap/Container'
import DiscoverForm from './DiscoverForm'
import DiscoverTable from './DiscoverTable'
import { connect } from 'react-redux'

class DiscoverContainer extends React.Component {
    render() {
        return (
            <Container className="d-grid gap-3">
                <div/>
                <DiscoverForm />
                <DiscoverTable games={this.props.apiGames} userGames={this.props.userGames} />
            </Container>
        )
    }
}

const mapStateToProps = ({ apiGames, userGames }) => {
    return {
        apiGames, 
        userGames
    }
}

export default connect(mapStateToProps)(DiscoverContainer)