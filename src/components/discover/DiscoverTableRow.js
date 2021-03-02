import React from 'react'
import OwnedButton from '../buttons/OwnedButton'
import WishlistButton from '../buttons/WishlistButton'

import '../../photo_style.css'

const DiscoverTableRow = (props) => {
    return (
        props.games.map(game => {
            if (game.visits > 100) {
                return (
                    <tr key={game.id} game_id={game.id} className="align-middle" >
                        <td className="text-center"><img src={game.images.small} className="photo" alt="game" /></td>
                        <td className="text-center">{game.name}</td>
                        <td className="text-center">{game.rank < 1000 ? game.rank : 'N/A'}</td>
                        <td className="text-center">{game.min_players}-{game.max_players}</td>
                        <td className="text-center">{'$'+(game.price > 0.01 ? game.price : 'N/A')}</td>
                        <td className="text-center">
                            <WishlistButton game={game} />
                        </td>
                        <td className="text-center">
                            <OwnedButton game={game} />
                        </td>
                    </tr>
                )    
            } else {
                return null
            }
        })
    )
}

export default DiscoverTableRow