import React from 'react'
import { Button } from 'react-bootstrap'
import { createWishlistGame } from '../../actions/games'
import { removeWishlistGameById } from '../../actions/games'
import { connect } from 'react-redux'

const WishlistButton = (props) => {

    const handleWishlistClick = event => {
        if (event.target.getAttribute('wishlisted') === 'true' ) {
            props.removeWishlistGameById(props.game)
        } else {
            props.createWishlistGame(props.game)
        }
    }

    const findItem = (obj, value) => {
        let result = false
        if (obj !== undefined) {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].id === value) {
                    result = true
                }
            }
            return result  
        }  
    }

    return (
        findItem(props.games.wishlist, props.game.id)
        ? <Button wishlisted="true" variant="secondary" onClick={handleWishlistClick}>Remove</Button>
        : <Button wishlisted="false" variant="primary" onClick={handleWishlistClick}>Add to Wishlist</Button>
    )

}

const mapStateToProps = ({ games }) => {
    return {
        games
    }
}

export default connect(mapStateToProps, { createWishlistGame, removeWishlistGameById } )(WishlistButton)