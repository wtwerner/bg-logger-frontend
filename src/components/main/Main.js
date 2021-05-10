import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import RecentGames from './RecentGames';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

const Main = ({ recentGames, popularGames, currentUser }) => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    const welcome = () => {
        if (isLoading) {
            return <div>Loading...</div>;
        } else if (!isAuthenticated) {
            return (
                <div>
                    <h1>Welcome to BG Logger!</h1>
                    <h5>Please Login.</h5>
                </div>
            );
        }

        return (
            <div>
                <h1>Welcome to BG Logger!</h1>
                <h5>Logged in as {user.name}</h5>
            </div>
        );
    };

    return (
        <>
            <Container style={{ width: '750px', padding: '30px', textAlign: 'center' }}>
                <Jumbotron className="border rounded" style={{ padding: '25px' }}>
                    {welcome()}
                </Jumbotron>
            </Container>
            <Container>
                {currentUser ? (
                    recentGames.length > 2 ? (
                        <RecentGames games={recentGames} recent={true} />
                    ) : (
                        <RecentGames games={popularGames} recent={false} />
                    )
                ) : null}
            </Container>
        </>
    );
};

const mapStateToProps = ({ games, currentUser }) => {
    return {
        recentGames: games.recent,
        popularGames: games.discover.slice(0, 3),
        currentUser,
    };
};

export default connect(mapStateToProps)(Main);
