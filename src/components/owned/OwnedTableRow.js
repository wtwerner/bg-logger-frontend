import React from 'react'
import OwnedButton from '../buttons/OwnedButton'
import InfoButton from '../buttons/InfoButton'

import '../../photo_style.css'
import PlayButton from '../buttons/PlayButton'

const OwnedTableRow = (props) => {
    return (
        <tr key={props.game.id} game_id={props.game.id} className="align-middle" >
            <td className="text-center"><img src={props.game.images.small} className="photo" alt="game" /></td>
            <td className="text-center">{props.game.name}</td>
            <td className="text-center">{props.game.rank}</td>
            <td className="text-center">{props.game.min_players}-{props.game.max_players}</td>
            <td className="text-center"><InfoButton game={props.game} openModal={props.openModal} /></td>
            <td className="text-center"><PlayButton /></td>
            <td className="text-center"><OwnedButton game={props.game} /></td>
        </tr>
    )
}

export default OwnedTableRow