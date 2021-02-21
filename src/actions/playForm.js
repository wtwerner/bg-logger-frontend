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
        return fetch("http://localhost:3001/api/v1/plays", {
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
                dispatch(addPlay(play))
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