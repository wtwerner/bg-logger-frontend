const userGames = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER_GAMES':
            return action.games.games
        default:
            return state
    }
}

export default userGames