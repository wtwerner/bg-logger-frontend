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
