export const updatePlayForm = (formData) => {
    return {
        type: "UPDATE_PLAY_FORM",
        formData
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
        return fetch("https://cors-anywhere.herokuapp.com/https://bg-logger-backend.herokuapp.com/api/v1/plays", {
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
        return fetch(`https://cors-anywhere.herokuapp.com/https://bg-logger-backend.herokuapp.com/api/v1/plays/${play.id}`, {
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