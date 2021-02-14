const API_URL = 'https://api.boardgameatlas.com/api/'
const CLIENT_ID = '&client_id=0hcbB6EyEf'

export const searchApiGames = games => {
    return {
      type: "SEARCH_API_GAMES",
      games
    }
}

export const fetchGamesFromQuery = (query) => {
    return dispatch => {
        return fetch(API_URL+'search?name='+query+CLIENT_ID+'&fuzzy_match=true')
            .then(response => response.json())
            .then(data => {
                dispatch(searchApiGames(data))
            })
        .catch(err => console.log(err));
    }
}