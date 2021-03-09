import React from 'react'
import { Button } from 'react-bootstrap'
import { moveToOwned } from '../../actions/games'
import { connect } from 'react-redux'

const WishlistToOwnedButton = (props) => {

    const handleOwnedClick = () => {
        props.moveToOwned(props.game)
    }

    return (
        <Button variant="primary" onClick={handleOwnedClick}>Move to Owned</Button>
    )

}

export default connect(null , { moveToOwned })(WishlistToOwnedButton)