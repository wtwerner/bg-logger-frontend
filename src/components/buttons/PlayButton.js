import React from 'react'
import { Button } from 'react-bootstrap'
import { removePlay, setPlayGame } from '../../actions/forms'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const PlaysButton = (props) => {

    const history = useHistory()

    const handlePlayClick = event => {
        if (event.target.parentElement.parentElement.getAttribute('play_id')) {
            props.removePlay(props.play)
        } else {
            if (props.game) {
                props.setPlayGame(props.game.id)
            }
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

export default connect(mapStateToProps, { removePlay, setPlayGame })(PlaysButton)