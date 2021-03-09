import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'

const Main = () => {

    return (
        <Container style={{width: "500px"}}>
            <Jumbotron>
                <h1>Welcome to BG Logger</h1>
                <p>
                    A simple app to search for, stash, and log plays of board games.
                </p>
            </Jumbotron>
        </Container>
    )
}

export default Main