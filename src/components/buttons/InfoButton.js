import React from 'react'
import { Button } from 'react-bootstrap'

const InfoButton = (props) => {
    return (
        <Button game={props.game} onClick={() => props.openModal(props.game)}>More Info</Button>
    )

}

export default InfoButton