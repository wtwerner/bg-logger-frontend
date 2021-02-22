const userPlays = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLAYS':
            return action.plays
        case 'ADD_PLAY':
            return state.concat(action.play)
        case 'DELETE_PLAY':
            return state.filter(play => play.id !== action.play.id)
        default:
            return state
    }
}

export default userPlays;