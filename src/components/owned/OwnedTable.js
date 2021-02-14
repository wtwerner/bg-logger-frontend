import React from 'react'
import { Table } from 'react-bootstrap'

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
                        <th>Session Count</th>
                        <th>Add a Session</th>
                        <th>View Sessions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.user.data.attributes.games.map(game => {
                            return (
                                <tr key={game.id} className="align-middle" >
                                    <td className="text-center">{game.bga_id}</td>
                                </tr>
                            )}
                    )}
                </tbody>
            </Table>
        )
    }   
}

export default OwnedTable