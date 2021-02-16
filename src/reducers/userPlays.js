const userPlays = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLAY':
            return action.play
        default:
            return state
    }
}

export default userPlays;