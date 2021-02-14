const userGames = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_OWNED_GAMES':
            return {
                ...state,
                owned: action.games.games
            }
        case 'ADD_WISHLIST_GAMES':
            return {
                ...state,
                wishlist: action.games.games
                
            }
        default:
            return state
    }
}

export default userGames