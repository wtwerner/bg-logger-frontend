export const addGameToWishlist = (game) => {
    return {
        type: "ADD_GAME_TO_WISHLIST",
        game
    }
}

export const addToWishlist = (game) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/user/games", {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
          .then(response => response.json())
          .then(response => {
            if (response.error) {
              alert(response.error)
            } else {
              dispatch(setCurrentUser(response))
            }
        })
          .catch(console.log)
    }
}