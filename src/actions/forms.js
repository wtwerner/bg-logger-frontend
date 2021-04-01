import { API_ROOT } from '../apiRoot'

//Discover form

export const updateDiscoverForm = (formData) => {
    return {
        type: "UPDATE_DISCOVER_FORM",
        formData
    }
}
  
export const resetDiscoverForm = () => {
    return {
        type: "RESET_DISCOVER_FORM"
    }
}

//Login form

export const updateLoginForm = (formData) => {
    return {
        type: "UPDATE_LOGIN_FORM",
        formData
    }
}
  
export const resetLoginForm = () => {
    return {
        type: "RESET_LOGIN_FORM"
    }
}

//Play form

export const updatePlayForm = (formData) => {
    return {
        type: "UPDATE_PLAY_FORM",
        formData
    }
}

export const setPlayGame = (game) => {
    return {
        type: "SET_PLAY_FORM_GAME",
        game
    }
}
  
export const resetPlayForm = () => {
    return {
        type: "RESET_PLAY_FORM"
    }
}

export const addPlay = play => {
    return {
      type: "ADD_PLAY",
      play
    }
}

export const deletePlay = play => {
    return {
      type: "DELETE_PLAY",
      play
    }
}

export const addPlays = plays => {
    return {
      type: "ADD_PLAYS",
      plays
    }
}

export const createPlay = (play) => {
    return dispatch => {
        console.log("Creating play with game " + play.game)
        const sendablePlayData = {
            game_id: play.game,
            date: play.date,
            players: play.players,
            duration: play.duration,
            winner: play.winner,
            notes: play.notes
        }
        return fetch(`${API_ROOT}/api/v1/plays`, {
            credentials: "include",
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(sendablePlayData)
        })
            .then(r => r.json())
            .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(addPlay(resp))
            }
            })
            .catch(console.log)
    }
}

export const removePlay = (play) => {
    return dispatch => {
        console.log("Removing play with game id " + play.bga_id)
        const sendableGameData = {
            id: play.id
        }
        return fetch(`${API_ROOT}/api/v1/plays/${play.id}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableGameData)
        })
            .then(r => r.json())
            .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(deletePlay(resp))
            }
            })
            .catch(console.log)
    }
}

export const fetchPlaysFromUser = (user) => {
    return dispatch => {
        dispatch(addPlays(user.data.attributes.plays))
    }
}

//Signup form

export const updateSignupForm = formData => {
    return {
      type: "UPDATE_SIGNUP_FORM",
      formData
    }
}
  
export const resetSignupForm = () => {
    return {
      type: "RESET_SIGNUP_FORM"
    }
}

//Friend form

export const updateFriendForm = formData => {
    return {
      type: "UPDATE_FRIEND_FORM",
      formData
    }
}
  
export const resetFriendForm = () => {
    return {
      type: "RESET_FRIEND_FORM"
    }
}

export const addFriend = friend => {
    return {
      type: "ADD_FRIEND",
      friend
    }
}

export const deleteFriend = friend => {
    return {
      type: "DELETE_FRIEND",
      friend
    }
}

export const createFriend = (friend) => {
    return dispatch => {
        console.log("Creating friend with name " + friend.name)
        const sendablePlayData = {
            name: friend.name
        }
        return fetch(`${API_ROOT}/api/v1/friends`, {
            credentials: "include",
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(sendablePlayData)
        })
            .then(r => r.json())
            .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(addFriend(resp))
            }
            })
            .catch(console.log)
    }
}

export const removeFriend = (friend) => {
    return dispatch => {
        console.log("Removing friend with name " + friend.name)
        const sendableGameData = {
            id: friend.id
        }
        return fetch(`${API_ROOT}/api/v1/friends/${friend.id}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableGameData)
        })
            .then(r => r.json())
            .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(deleteFriend(resp))
            }
            })
            .catch(console.log)
    }
}