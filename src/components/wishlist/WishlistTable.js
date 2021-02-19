import React from 'react'
import { Table } from 'react-bootstrap'
import WishlistButton from '../buttons/WishlistButton'
import WishlistToOwnedButton from '../buttons/WishlistToOwnedButton'

class WishlistTable extends React.Component {
    render() {
        return (
            <Table striped bordered hover className="pt-10">
                <thead>
                    <tr className="text-center">
                        <th>Image</th>
                        <th>Title</th>
                        <th>Rank</th>
                        <th>Players</th>
                        <th>Remove</th>
                        <th>Add to Owned</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.userGames.map(game => {
                            return (
                                <tr key={game.id} game_id={game.id} className="align-middle" >
                                    <td className="text-center"><img src={game.images.small} alt="game" /></td>
                                    <td className="text-center">{game.name}</td>
                                    <td className="text-center">{game.rank}</td>
                                    <td className="text-center">{game.min_players}-{game.max_players}</td>
                                    <td className="text-center">
                                        <WishlistButton game={game} />
                                    </td>
                                    <td className="text-center">
                                        <WishlistToOwnedButton game={game} />
                                    </td>
                                </tr>
                            )}
                    )}
                </tbody>
            </Table>
        )
    }   
}

export default WishlistTable