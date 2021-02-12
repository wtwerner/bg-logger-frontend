import React from 'react'
import { Table } from 'react-bootstrap'

class DiscoverTable extends React.Component {
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Rank</th>
                        <th>Players</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.games.map(game => 
                        <tr key={game.id}>
                            <td><img src={game.images.small} alt="game" /></td>
                            <td>{game.name}</td>
                            <td>{game.rank}</td>
                            <td>{game.min_players}-{game.max_players}</td>
                        </tr>    
                    )}
                </tbody>
            </Table>
        )
    }
}

export default DiscoverTable