import React from 'react'
import Container from 'react-bootstrap/Container'
import OwnedTable from './OwnedTable'
import { connect } from 'react-redux'

class OwnedContainer extends React.Component {
    render() {
        return (
            <Container>
                <OwnedTable user={this.props.currentUser} />
            </Container>
        )
    }
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(OwnedContainer)