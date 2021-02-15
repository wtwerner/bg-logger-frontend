const userGames = (state = {wishlist: [], owned: []}, action) => {
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
        case 'DELETE_WISHLIST_GAME':
            return {
                ...state,
                wishlist: state.wishlist.filter(game => game.id !== action.game.bga_id)
            }
        case 'DELETE_OWNED_GAME':
            return {
                ...state,
                owned: state.owned.filter(game => game.id !== action.game.bga_id)
            }
        default:
            return state
    }
}

export default userGames