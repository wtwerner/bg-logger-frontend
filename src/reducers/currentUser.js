const currentUser = (state = null, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return null
        case "ADD_FRIEND":
            return {
                ...state,
                data: {
                    ...state.data,
                    attributes: {
                        ...state.data.attributes,
                        friends: state.data.attributes.friends.concat(action.friend)
                    }
                }
            }
        default:
            return state
    }
}

export default currentUser