import React from 'react'
import { Button } from 'react-bootstrap'
import { moveToOwned } from '../../actions/userGames'
import { connect } from 'react-redux'

const WishlistToOwnedButton = (props) => {

    const handleOwnedClick = event => {
        props.moveToOwned(event.target.parentElement.parentElement.getAttribute('game_id'))
    }

    return (
        <Button variant="primary" onClick={handleOwnedClick}>Move to Owned</Button>
    )

}

const mapStateToProps = ({ userGames }) => {
    return {
        userGames
    }
}

export default connect(mapStateToProps, { moveToOwned } )(WishlistToOwnedButton)