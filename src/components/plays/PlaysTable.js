import React from 'react'
import { Table, Button } from 'react-bootstrap'
import PlaysTableRow from './PlaysTableRow'

const PlaysTable = ({userPlays, ownedGames}) => {
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
            <tbody>
                {userPlays.map(play => {
                    return <PlaysTableRow key={play.id} games={ownedGames} play={play} />
                })}
            </tbody>
        </Table>
    )
}

export default PlaysTable