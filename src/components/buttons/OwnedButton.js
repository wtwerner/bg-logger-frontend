import React from 'react'
import { Button } from 'react-bootstrap'
import { createOwnedGame } from '../../actions/games'
import { removeOwnedGame } from '../../actions/games'
import { connect } from 'react-redux'

const OwnedButton = (props) => {

    const handleOwnedClick = event => {
        if (event.target.getAttribute('owned') === 'true' ) {
            if (window.confirm('Are you sure you want to do this? All associated plays will be deleted as well. This action cannot be undone.')) {
                props.removeOwnedGame(props.game)
            }
        } else {
            props.createOwnedGame(props.game)
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
        findItem(props.games.owned, props.game.id)
            ? <Button size="sm" owned="true" variant="secondary" onClick={handleOwnedClick}>Remove from Owned</Button>
            : <Button size="sm" owned="false" variant="primary" onClick={handleOwnedClick}>Add to Owned</Button>
    )

}

const mapStateToProps = ({ games }) => {
    return {
        games
    }
}

export default connect(mapStateToProps, { createOwnedGame, removeOwnedGame })(OwnedButton)