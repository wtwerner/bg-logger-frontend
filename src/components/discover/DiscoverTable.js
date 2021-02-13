import React from 'react'
import { Table, Button } from 'react-bootstrap'

class DiscoverTable extends React.Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Rank</th>
                        <th>Complexity</th>
                        <th>Players</th>
                        <th>Price</th>
                        <th>Add to Wishlist</th>
                        <th>Add to Collection</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.games.map(game => {
                        if (game.visits > 100)
                            return (<tr key={game.id}>
                                <td><img src={game.images.small} alt="game" /></td>
                                <td>{game.name}</td>
                                <td>{game.rank < 1000 ? game.rank : 'N/A'}</td>
                                <td>{game.average_learning_complexity.toFixed(2)}</td>
                                <td>{game.min_players}-{game.max_players}</td>
                                <td>{'$'+(game.price > 0.01 ? game.price : 'N/A')}</td>
                                <td><Button /></td>
                                <td><Button /></td>
                            </tr>)    
                        }
                    )}
                </tbody>
            </Table>
        )
    }
}

export default DiscoverTable