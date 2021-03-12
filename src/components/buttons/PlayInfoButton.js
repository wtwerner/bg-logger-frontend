import React from 'react'
import { Button } from 'react-bootstrap'

const PlayInfoButton = (props) => {
    return (
        <Button size="sm" game={props.game} play={undefined} onClick={() => props.openModal(props.game, props.play)}>More Info</Button>
    )

}

export default PlayInfoButton