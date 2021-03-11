import React from 'react'
import { Container, CardGroup } from 'react-bootstrap'
import RecentGameCard from './RecentGameCard'
import PopularGameCard from './PopularGameCard'

const RecentGames = (props) => {

    return (
        <Container style={{width: "750px"}}>
            {props.recent === true 
                ?  <div className="text-center"><h5>Recently Added To Owned</h5></div>
                :  <div className="text-center"><h5>Popular Games</h5></div>
            }
            <CardGroup>
                {props.recent === true 
                    ?  props.games.map(game => {
                        return <RecentGameCard game={game} key={'recent_' + game.id} />
                    })
                    :  props.games.map(game => {
                        return <PopularGameCard game={game} key={'recent_' + game.id} />
                    })
                }
            </CardGroup>
        </Container>
    ) 
}

export default RecentGames