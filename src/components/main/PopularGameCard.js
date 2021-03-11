import React from 'react'
import { Card } from 'react-bootstrap'
import WishlistButton from '../buttons/WishlistButton'
import '../../photo_style.css'

const PopularGameCard = (props) => {

    return (
        <Card style={{ width: '200px' }} >
            <Card.Header>
                <div className="text-center">
                    <Card.Title>{props.game.name}</Card.Title>
                </div>
            </Card.Header>
            <div style={{height: "150px"}}><Card.Img variant="center" src={props.game.images.small} className="photo" style={{padding: "15px"}} /></div>
            <Card.Footer>
                <div className="text-center">
                    <WishlistButton game={props.game} />
                </div>
            </Card.Footer>
        </Card>
    ) 
}

export default PopularGameCard