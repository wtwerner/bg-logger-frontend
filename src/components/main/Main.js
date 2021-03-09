import React from 'react'
import { Jumbotron, Container} from 'react-bootstrap'
import RecentGames from './RecentGames'
import { connect } from 'react-redux'

const Main = ({recentGames}) => {

    return (
        <>
            <Container style={{width: "500px", padding: "30px"}}>
                <Jumbotron>
                    <h1>Welcome to BG Logger</h1>
                    <p>
                        A simple app to search for and collect board games.
                    </p>
                </Jumbotron>
            </Container>
            <Container>
                <RecentGames games={recentGames} />
            </Container>
        </>
    )
}

const mapStateToProps = ({ games }) => {
    return {
        recentGames: games.recent
    }
}

export default connect(mapStateToProps)(Main)