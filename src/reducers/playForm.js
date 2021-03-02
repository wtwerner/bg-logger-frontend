const initialState = {
    game: null,
    date: null,
    players: null,
    duration: null,
    winner: null,
    notes: ''
}

const playForm = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PLAY_FORM':
            return action.formData
        default:
            return state
    }
}

export default playForm;