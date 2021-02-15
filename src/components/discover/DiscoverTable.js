import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { createWishlistGame } from '../../actions/userGames'
import { removeWishlistGameById } from '../../actions/userGames'
import { createOwnedGame } from '../../actions/userGames'
import { connect } from 'react-redux'


const DiscoverTable = (props) => {
    
    const handleWishlistClick = event => {
        if (event.target.getAttribute('wishlisted') === 'true' ) {
            props.removeWishlistGameById(event.target.parentElement.parentElement.getAttribute('game_id'))
        } else {
            props.createWishlistGame(event.target.parentElement.parentElement.getAttribute('game_id'))
        }
    }

    const handleOwnedClick = event => {
        event.preventDefault()
        props.createOwnedGame(event.target.parentElement.parentElement.getAttribute('game_id'))
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
        <Table striped bordered hover className="pt-10">
            <thead>
                <tr className="text-center">
                    <th>Image</th>
                    <th>Title</th>
                    <th>Rank</th>
                    <th>Players</th>
                    <th>Price</th>
                    <th>Add to Wishlist</th>
                    <th>Add to Owned</th>
                </tr>
            </thead>
            <tbody>
                {props.games.map(game => {
                    if (game.visits > 100) {
                        return (
                            <tr key={game.id} game_id={game.id} className="align-middle" >
                                <td className="text-center"><img src={game.images.small} alt="game" /></td>
                                <td className="text-center">{game.name}</td>
                                <td className="text-center">{game.rank < 1000 ? game.rank : 'N/A'}</td>
                                <td className="text-center">{game.min_players}-{game.max_players}</td>
                                <td className="text-center">{'$'+(game.price > 0.01 ? game.price : 'N/A')}</td>
                                <td className="text-center">
                                    {findItem(props.userGames.wishlist, game.id)
                                        ? <Button wishlisted="true" variant="secondary" onClick={handleWishlistClick}>Remove</Button>
                                        : <Button wishlisted="false" variant="primary" onClick={handleWishlistClick}>Add to Wishlist</Button>
                                    }
                                </td>
                                <td className="text-center">
                                    {findItem(props.userGames.owned, game.id)
                                        ? <Button owned="true" variant="secondary" onClick={handleOwnedClick}>Remove</Button>
                                        : <Button owned="false" variant="primary" onClick={handleOwnedClick}>Add to Owned</Button>
                                    }
                                </td>
                            </tr>
                        )    
                    } else {
                        return null
                    }
                })}
            </tbody>
        </Table>
    )

}

export default connect(null, { createWishlistGame, createOwnedGame, removeWishlistGameById } )(DiscoverTable)