import React from 'react'
import { Button } from 'react-bootstrap'
import { moveToOwned } from '../../actions/games'
import { connect } from 'react-redux'

const WishlistToOwnedButton = (props) => {

    const handleOwnedClick = event => {
        props.moveToOwned(event.target.parentElement.parentElement.getAttribute('game_id'))
    }

    return (
        <Button variant="primary" onClick={handleOwnedClick}>Move to Owned</Button>
    )

}

export default connect(null , { moveToOwned } )(WishlistToOwnedButton)