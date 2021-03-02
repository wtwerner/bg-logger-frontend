import React from 'react'
import PlayButton from '../buttons/PlayButton';
import PlayInfoButton from '../buttons/PlayInfoButton' 

const PlaysTableRow = (props) => {
    const game = props.games.filter(game => game.id === props.play.bga_id)[0];
    const date = props.play.date.substring(0,10);

    if (!game) {
        return (
            <tr/>
        )
    }     

    while (game !== null) {
        return (
            <tr key={props.play.id} play_id={props.play.id} game={game} className="align-middle" >
                <td className="text-center">{game.name}</td>
                <td className="text-center">{date}</td>
                <td className="text-center"><PlayInfoButton game={game} play={props.play} openModal={props.openModal} /></td>
                <td className="text-center"><PlayButton play={props.play} game={game} /></td>
            </tr>
        )
    }
}

export default PlaysTableRow



