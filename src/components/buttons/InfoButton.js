import React from 'react'
import { Button } from 'react-bootstrap'

const InfoButton = (props) => {
    return (
        <Button size="sm" game={props.game} onClick={() => props.openModal(props.game)}>More Info</Button>
    )

}

export default InfoButton