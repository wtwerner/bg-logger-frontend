import React from 'react'
import Container from 'react-bootstrap/Container'
import OwnedTable from './OwnedTable'
import { connect } from 'react-redux'

class OwnedContainer extends React.Component {
    render() {
        if(this.props.currentUser) {
        return (
            <Container>
                <OwnedTable user={this.props.currentUser} />
            </Container>
        )
        } else {
            return (
                <Container>
                    <h1>Login or signup to save games.</h1>
                </Container> 
            )
        }
    } 
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(OwnedContainer)