import React from 'react'
import { Table, Button } from 'react-bootstrap'

const PlaysTable = ({userPlays}) => {
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
                    return (
                        <tr key={play.id} play_id={play.id} className="align-middle" >
                            <td className="text-center">Game Name</td>
                            <td className="text-center">Play Date</td>
                            <td className="text-center"><Button>Notes</Button></td>
                            <td className="text-center"><Button>Remove Play</Button></td>
                        </tr>
                    )}
                )}
            </tbody>
        </Table>
    )
}

export default PlaysTable