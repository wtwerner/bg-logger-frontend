import React from 'react'
import { Button } from 'react-bootstrap'
import { createOwnedGame } from '../../actions/games'
import { removeOwnedGameById } from '../../actions/games'
import { connect } from 'react-redux'

const OwnedButton = (props) => {

    const handleOwnedClick = event => {
        if (event.target.getAttribute('owned') === 'true' ) {
            props.removeOwnedGameById(event.target.parentElement.parentElement.getAttribute('game_id'))
        } else {
            props.createOwnedGame(event.target.parentElement.parentElement.getAttribute('game_id'))
        }
    }

    const findItem = (obj, value) => {
        let result = false
        if (obj) {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].id === value) {
                    result = true
                }
            }
            return result  
        }  
    }

    return (
        findItem(props.games.owned, props.game_id)
            ? <Button owned="true" variant="secondary" onClick={handleOwnedClick}>Remove</Button>
            : <Button owned="false" variant="primary" onClick={handleOwnedClick}>Add to Owned</Button>
    )

}

const mapStateToProps = ({ games }) => {
    return {
        games
    }
}

export default connect(mapStateToProps, { createOwnedGame, removeOwnedGameById } )(OwnedButton)