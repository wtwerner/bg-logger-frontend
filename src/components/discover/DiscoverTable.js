import React from 'react'
import { Table } from 'react-bootstrap'
import OwnedButton from '../buttons/OwnedButton'
import WishlistButton from '../buttons/WishlistButton'


const DiscoverTable = (props) => {

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
                                    <WishlistButton game_id={game.id} />
                                </td>
                                <td className="text-center">
                                    <OwnedButton game_id={game.id} />
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

export default DiscoverTable