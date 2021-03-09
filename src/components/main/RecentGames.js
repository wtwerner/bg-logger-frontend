import React from 'react'
import { Container, CardGroup } from 'react-bootstrap'
import RecentGameCard from './RecentGameCard'

const RecentGames = () => {

    return (
        <Container style={{width: "750px"}}>
            <CardGroup>
                <RecentGameCard/>
                <RecentGameCard/>
                <RecentGameCard/>
            </CardGroup>
        </Container>
    ) 
}

export default RecentGames