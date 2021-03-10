const initialState = {
    discover: {
        query: ''
    }, 
    login: {
        email: '',
        password: ''
    }, 
    play: {
        game: null,
        date: null,
        players: null,
        duration: null,
        winner: null,
        notes: ''
    },
    signup: {
        name: '',
        email: '',
        password: '',
    },
    friend: {
        name: ''
    }
}

const forms = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DISCOVER_FORM':
            return {
                ...state,
                discover: action.formData
            }
        case 'UPDATE_LOGIN_FORM':
            return {
                ...state,
                login: action.formData
            }
        case 'RESET_LOGIN_FORM':
            return {
                ...state,
                login: {
                    email: '',
                    password: ''
                }
            }
        case 'UPDATE_PLAY_FORM':
        return {
            ...state,
            play: action.formData
        }
        case 'SET_PLAY_FORM_GAME':
        return {
            ...state,
            play: {
                ...state.play,
                game: action.game
            } 
        }
        case 'RESET_PLAY_FORM':
            return {
                ...state,
                play: {
                    game: null,
                    date: null,
                    players: null,
                    duration: null,
                    winner: null,
                    notes: ''
                }
            }
        case "UPDATE_SIGNUP_FORM":
            return {
                ...state,
                signup: action.formData
            }
        case "RESET_SIGNUP_FORM":
            return {
                ...state,
                signup: {
                    name: '',
                    email: '',
                    password: '',
                }
            }
        case "UPDATE_FRIEND_FORM":
            return {
                ...state,
                friend: action.formData
            }
        case "RESET_FRIEND_FORM":
            return {
                ...state,
                friend: {
                    name: ''
                }
            }
        default:
            return state
    }
}

export default forms
