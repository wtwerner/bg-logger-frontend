import React from 'react'
import { Button } from 'react-bootstrap'
import { createPlay, removePlay } from '../../actions/playForm'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const PlaysButton = (props) => {

    const history = useHistory()

    const handlePlayClick = event => {
        if (event.target.parentElement.parentElement.getAttribute('play_id')) {
            console.log(props.play)
            props.removePlay(props.play)
        } else {
            history.push('/plays/new')
        }
    }

    return (
        props.play
        ? <Button variant="secondary" onClick={handlePlayClick}>Remove</Button>
        : <Button variant="primary" onClick={handlePlayClick}>Add Play</Button>
    )

}

const mapStateToProps = ({ games }) => {
    return {
        games
    }
}

export default connect(mapStateToProps, { createPlay, removePlay })(PlaysButton)