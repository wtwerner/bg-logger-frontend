const API_URL = 'https://api.boardgameatlas.com/api/'
const CLIENT_ID = '&client_id=0hcbB6EyEf'

export const addUserGames = games => {
    return {
      type: "ADD_USER_GAMES",
      games
    }
}

export const fetchGameFromId = (user) => {
    let idsString = ''
    user.data.attributes.games.forEach(game => idsString += `${game.bga_id},`)
    console.log(idsString)
    return dispatch => {
        return fetch(API_URL+'search?ids='+idsString+CLIENT_ID)
            .then(response => response.json())
            .then(data => {
                dispatch(addUserGames(data))
            })
        .catch(err => console.log(err));
    }
}
