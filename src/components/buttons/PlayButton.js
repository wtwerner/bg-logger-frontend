import React from 'react'
import { Button } from 'react-bootstrap'
import { removePlay, setPlayGame } from '../../actions/forms'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const PlaysButton = (props) => {

    const history = useHistory()

    const handlePlayClick = event => {
        if (event.target.parentElement.parentElement.getAttribute('play_id')) {
            if (window.confirm('Are you sure you want to do this? This action cannot be undone.')) {
                props.removePlay(props.play)
            }
        } else {
            if (props.game) {
                props.setPlayGame(props.game.id)
            }
            history.push('/plays/new')
        }
    }

    return (
        props.play
        ? <Button size="sm" variant="secondary" onClick={handlePlayClick}>Remove</Button>
        : <Button size="sm" variant="primary" onClick={handlePlayClick}>Add Play</Button>
    )

}

const mapStateToProps = ({ games }) => {
    return {
        games
    }
}

export default connect(mapStateToProps, { removePlay, setPlayGame })(PlaysButton)