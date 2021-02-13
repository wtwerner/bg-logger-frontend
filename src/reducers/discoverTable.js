const discoverForm = (state = null, action) => {
    switch (action.type) {
        case 'ADD_GAME_TO_WISHLIST':
            return action.game
        default:
            return state
    }
}

export default discoverForm;