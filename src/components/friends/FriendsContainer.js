import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';

const FriendsContainer = ({ currentUser }) => {
    if (currentUser) {
        const friends = currentUser.data.attributes.searchedFriends;
        return (
            <Container>
                <FriendForm />
                {friends ? <FriendsList friends={friends} /> : null}
            </Container>
        );
    } else {
        return <p>Sign up or sign in to see this page.</p>;
    }
};

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
    };
};

export default connect(mapStateToProps)(FriendsContainer);
