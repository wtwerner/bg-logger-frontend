import React from 'react'
import { Container } from 'react-bootstrap'

const FriendsList = (props) => {
    return(
        <Container>
            <ul>
                {props.friends.map(friend => {
                    return <li>{friend.name}</li>
                })}
            </ul>
        </Container>
    )
}

export default FriendsList