const initialState = {
    wishlist: [], 
    owned: [], 
    discover: []
}

const games = (state = initialState, action) => {
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
                wishlist: state.wishlist.filter(game => game.id !== action.game)
            }
        case 'DELETE_OWNED_GAME':
            return {
                ...state,
                owned: state.owned.filter(game => game.id !== action.game.bga_id)
            }
        case 'SEARCH_API_GAMES':
            return {
                ...state,
                discover: action.games.games
            }
        case 'RESET_GAMES':
            return initialState
        default:
            return state
    }
}

export default games