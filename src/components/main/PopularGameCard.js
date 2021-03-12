import React from 'react'
import { Card } from 'react-bootstrap'
import WishlistButton from '../buttons/WishlistButton'
import '../../photo_style.css'

const PopularGameCard = (props) => {

    return (
        <Card>
            <Card.Header>
                <div className="text-center">
                    <Card.Title>{props.game.name}</Card.Title>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Img src={props.game.images.small} className="photo" />
            </Card.Body>
            <Card.Footer>
                <div className="text-center">
                    <WishlistButton game={props.game} />
                </div>
            </Card.Footer>
        </Card>
    ) 
}

export default PopularGameCard