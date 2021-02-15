import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { createWishlistGame } from '../../actions/userGames'
import { connect } from 'react-redux'


const DiscoverTable = (props) => {
    
    const handleWishlistClick = event => {
        event.preventDefault()
        props.createWishlistGame(event.target.parentElement.parentElement.getAttribute('game_id'))
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
                    <th>Add to Collection</th>
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
                                <td className="text-center"><Button onClick={handleWishlistClick}>Wishlist</Button></td>
                                <td className="text-center"><Button>Collection</Button></td>
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

export default connect(null, { createWishlistGame } )(DiscoverTable)