import React from 'react'
import { Table, Button } from 'react-bootstrap'
import OwnedButton from '../buttons/OwnedButton'

class OwnedTable extends React.Component {
    render() {
        return (
            <Table striped bordered hover className="pt-10">
                <thead>
                    <tr className="text-center">
                        <th>Image</th>
                        <th>Title</th>
                        <th>Rank</th>
                        <th>Players</th>
                        <th>Add a Play</th>
                        <th>View Plays</th>
                        <th>Remove</th>
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
                                    <td className="text-center"><Button>Add a Play</Button></td>
                                    <td className="text-center"><Button>View Plays</Button></td>
                                    <td className="text-center"><OwnedButton game={game} /></td>
                                </tr>
                            )}
                    )}
                </tbody>
            </Table>
        )
    }   
}

export default OwnedTable