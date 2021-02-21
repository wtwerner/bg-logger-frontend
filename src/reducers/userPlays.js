const userPlays = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLAYS':
            return action.plays
        case 'ADD_PLAY':
            return state.concat(action.play)
        default:
            return state
    }
}

export default userPlays;