const API_URL = 'https://api.boardgameatlas.com/api/'
const CLIENT_ID = '&client_id=0hcbB6EyEf'

export const addWishlistGames = games => {
    return {
      type: "ADD_WISHLIST_GAMES",
      games
    }
}

export const addOwnedGames = games => {
    return {
      type: "ADD_OWNED_GAMES",
      games
    }
}

export const addToWishlist = game => {
    return{
        type: 'ADD_TO_WISHLIST',
        game
    }    
}

export const addToOwned = game => {
    return{
        type: 'ADD_TO_OWNED',
        game
    }    
}

export const fetchGameFromId = (user) => {
    return dispatch => {
        let ownedIdsString = ''
        let wishlistIdsString = ''
        user.data.attributes.games.forEach(game => {
            if (game.owned) {
                ownedIdsString += `${game.bga_id},`
            } else if (game.wishlist) {
                wishlistIdsString += `${game.bga_id},`
            }
        })
        if (ownedIdsString !== '') {
            dispatch(fetchOwnedGames(ownedIdsString))
        }
        if (wishlistIdsString !== '') {
            dispatch(fetchWishlistGames(wishlistIdsString))
        }
    }
}

export const fetchGameFromButton = (game) => {
    return dispatch => {
        let ownedIdsString = ''
        let wishlistIdsString = ''
        if (game.owned) {
            ownedIdsString += `${game.bga_id},`
        } else if (game.wishlist) {
            wishlistIdsString += `${game.bga_id},`
        }
        if (ownedIdsString !== '') {
            dispatch(fetchOwnedGamesFromButton(ownedIdsString))
        }
        if (wishlistIdsString !== '') {
            dispatch(fetchWishlistGamesFromButton(wishlistIdsString))
        }
    }
}

export const fetchOwnedGames = (string) => {
    return dispatch => {
        return fetch(API_URL+'search?ids='+string+CLIENT_ID)
            .then(response => response.json())
            .then(data => {
                dispatch(addOwnedGames(data))
            })
        .catch(err => console.log(err));
    }
}

export const fetchWishlistGames = (string) => {
    return dispatch => {
        return fetch(API_URL+'search?ids='+string+CLIENT_ID)
            .then(response => response.json())
            .then(data => {
                dispatch(addWishlistGames(data))
            })
        .catch(err => console.log(err));
    }
}

export const fetchWishlistGamesFromButton = (string) => {
    return dispatch => {
        return fetch(API_URL+'search?ids='+string+CLIENT_ID)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(addToWishlist(data.games[0]))
            })
        .catch(err => console.log(err));
    }
}

export const fetchOwnedGamesFromButton = (string) => {
    return dispatch => {
        return fetch(API_URL+'search?ids='+string+CLIENT_ID)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(addToOwned(data.games[0]))
            })
        .catch(err => console.log(err));
    }
}

export const createWishlistGame = (id) => {
    return dispatch => {
        console.log("Creating wishlist game with ID " + id)
      const sendableGameData = {
        bga_id: id,
        wishlist: true,
        owned: false
      }
      return fetch("http://localhost:3001/api/v1/games", {
        credentials: "include",
        method: "POST",
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
            dispatch(fetchGameFromButton(resp))
          }
        })
        .catch(console.log)
    }
  }
