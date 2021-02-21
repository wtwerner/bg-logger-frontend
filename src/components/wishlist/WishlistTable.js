import React from 'react'
import { Table } from 'react-bootstrap'
import WishlistTableRow from './WishlistTableRow'

class WishlistTable extends React.Component {
    render() {
        return (
            <Table striped hover className="pt-10">
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
                    <WishlistTableRow userGames={this.props.userGames} />
                </tbody>
            </Table>
        )
    }   
}

export default WishlistTable