import React from 'react'
import { Card } from 'react-bootstrap'
import PlayButton from '../buttons/PlayButton'
import '../../photo_style.css'

const RecentGameCard = (props) => {

    return (
        <Card style={{ width: '200px' }} >
            <Card.Header>
                <div className="text-center">
                    <Card.Title>{props.game.name}</Card.Title>
                </div>
            </Card.Header>
            <div style={{height: "150px"}}><Card.Img src={props.game.images.small} className="photo" style={{padding: "15px"}} /></div>
            <Card.Footer>
                <div className="text-center">
                    <PlayButton game={props.game} />
                </div>
            </Card.Footer>
        </Card>
    ) 
}

export default RecentGameCard