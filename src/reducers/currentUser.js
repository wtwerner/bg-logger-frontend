const currentUser = (state = null, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.user;
        case 'CLEAR_CURRENT_USER':
            return null;
        case 'ADD_FRIEND':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        friends: state.data.attributes.friends.concat(action.friend),
                    },
                },
            };
        case 'ADD_SEARCHED_FRIEND':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        searchedFriends: state.data.attributes.friends.concat(action.friend),
                    },
                },
            };
        case 'DELETE_FRIEND':
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        friends: state.data.attributes.friends.filter((friend) => friend.id !== action.friend.id),
                    },
                },
            };
        default:
            return state;
    }
};

export default currentUser;
