import React from 'react'
import { Table } from 'react-bootstrap'

const PlaysTable = () => {
    return (
        <Table>
            <thead>
                <tr className="text-center">
                    <th>Game</th>
                    <th>Date</th>
                    <th>Notes</th>
                    <th>Remove</th>
                </tr>
            </thead>
        </Table>
    )
}

export default PlaysTable