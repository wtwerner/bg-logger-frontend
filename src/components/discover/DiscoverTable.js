import React from 'react'
import { Table } from 'react-bootstrap'
import DiscoverTableRow from './DiscoverTableRow'



const DiscoverTable = (props) => {

    return (
        <Table striped hover className="pt-10">
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
                <DiscoverTableRow games={props.games} />
            </tbody>
        </Table>
    )

}

export default DiscoverTable