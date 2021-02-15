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
        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                wishlist: state.wishlist.concat(action.game)
                
            }
        case 'ADD_TO_OWNED':
            return {
                ...state,
                owned: state.owned.concat(action.game)
                
            }
        default:
            return state
    }
}

export default userGames