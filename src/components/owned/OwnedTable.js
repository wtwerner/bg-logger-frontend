import React from 'react'
import { Table } from 'react-bootstrap'
import OwnedTableRow from './OwnedTableRow'

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
                    <OwnedTableRow userGames={this.props.userGames} />
                </tbody>
            </Table>
        )
    }   
}

export default OwnedTable