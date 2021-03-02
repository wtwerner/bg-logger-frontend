import React from 'react'
import WishlistButton from '../buttons/WishlistButton'
import WishlistToOwnedButton from '../buttons/WishlistToOwnedButton'
import InfoButton from '../buttons/InfoButton'

import '../../photo_style.css'

const WishlistTableRow = (props) => {
    return (
        <tr key={props.game.id} game_id={props.game.id} className="align-middle" >
            <td className="text-center"><img src={props.game.images.small} className="photo" alt="game" /></td>
            <td className="text-center">{props.game.name}</td>
            <td className="text-center">{props.game.rank}</td>
            <td className="text-center">{props.game.min_players}-{props.game.max_players}</td>
            <td className="text-center"><InfoButton game={props.game} openModal={props.openModal} /></td>
            <td className="text-center">
                <WishlistButton game={props.game} />
            </td>
            <td className="text-center">
                <WishlistToOwnedButton game={props.game} />
            </td>
        </tr>
    ) 
}

export default WishlistTableRow