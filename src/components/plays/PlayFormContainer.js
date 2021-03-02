import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import PlayForm from './PlayForm'

const PlayFormContainer = (props) => {
    return (
        <Container>
            <PlayForm games={props.games.owned} />
        </Container>
    )
}

const mapStateToProps = ({ games }) => {
    return {
        games
    }
}

export default connect(mapStateToProps)(PlayFormContainer)