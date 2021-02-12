import React from 'react'
import Container from 'react-bootstrap/Container'
import DiscoverForm from './DiscoverForm'
import DiscoverTable from './DiscoverTable'
import { connect } from 'react-redux'

class DiscoverContainer extends React.Component {
    render() {
        return (
            <Container>
                <DiscoverForm />
                <DiscoverTable games={this.props.apiGames}/>
            </Container>
        )
    }
}

const mapStateToProps = ({ apiGames }) => {
    return {
        apiGames
    }
}

export default connect(mapStateToProps)(DiscoverContainer)