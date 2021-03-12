import React from 'react'
import OwnedButton from '../buttons/OwnedButton'
import WishlistButton from '../buttons/WishlistButton'
import InfoButton from '../buttons/InfoButton'

import '../../photo_style.css'

const DiscoverTableRow = (props) => {
    return (
        <tr key={props.game.id} game_id={props.game.id} className="align-middle" >
            <td className="text-center"><img src={props.game.images.small} className="photo" alt="props.game" /></td>
            <td className="text-center">{props.game.name}</td>
            <td className="text-center">{props.game.rank < 1000 ? props.game.rank : 'N/A'}</td>
            <td className="text-center">{props.game.min_players}-{props.game.max_players}</td>
            <td className="text-center">{'$'+(props.game.price > 0.01 ? props.game.price : 'N/A')}</td>
            <td className="text-center"><InfoButton game={props.game} openModal={props.openModal} /></td>
            <td className="text-center">
                <WishlistButton game={props.game} />
            </td>
            <td className="text-center">
                <OwnedButton game={props.game} />
            </td>
        </tr>
    )    
    
}

export default DiscoverTableRow