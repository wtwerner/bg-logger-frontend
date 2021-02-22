import React from 'react'
import WishlistButton from '../buttons/WishlistButton'
import WishlistToOwnedButton from '../buttons/WishlistToOwnedButton'

import '../../photo_style.css'

const WishlistTableRow = (props) => {
    return (
        props.userGames.map(game => {
            return (
                <tr key={game.id} game_id={game.id} className="align-middle" >
                    <td className="text-center"><img src={game.images.small} className="photo" alt="game" /></td>
                    <td className="text-center">{game.name}</td>
                    <td className="text-center">{game.rank}</td>
                    <td className="text-center">{game.min_players}-{game.max_players}</td>
                    <td className="text-center">
                        <WishlistButton game={game} />
                    </td>
                    <td className="text-center">
                        <WishlistToOwnedButton game={game} />
                    </td>
                </tr>
            )}
        )
    )
}

export default WishlistTableRow