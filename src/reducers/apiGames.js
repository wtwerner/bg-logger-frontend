const apiGames = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_API_GAMES':
            return action.games.children
        default:
            return state
    }
}

export default apiGames