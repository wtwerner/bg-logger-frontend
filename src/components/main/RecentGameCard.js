import React from 'react'
import { Card } from 'react-bootstrap'
import PlayButton from '../buttons/PlayButton'
import '../../photo_style.css'

const RecentGameCard = (props) => {

    return (
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={props.game.images.small} className="photo" />
            <Card.Body>
                <Card.Title>{props.game.name}</Card.Title>
                <PlayButton />
            </Card.Body>
        </Card>
    ) 
}

export default RecentGameCard