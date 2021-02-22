import React from 'react'
import OwnedButton from '../buttons/OwnedButton'
import { Button } from 'react-bootstrap'

import '../../photo_style.css'
import PlayButton from '../buttons/PlayButton'

const OwnedTableRow = (props) => {
    return (
        props.userGames.map(game => {
            return (
                <tr key={game.id} game_id={game.id} className="align-middle" >
                    <td className="text-center"><img src={game.images.small} className="photo" alt="game" /></td>
                    <td className="text-center">{game.name}</td>
                    <td className="text-center">{game.rank}</td>
                    <td className="text-center">{game.min_players}-{game.max_players}</td>
                    <td className="text-center"><PlayButton /></td>
                    <td className="text-center"><Button>View Plays</Button></td>
                    <td className="text-center"><OwnedButton game={game} /></td>
                </tr>
            )}
        )
    )
}

export default OwnedTableRow