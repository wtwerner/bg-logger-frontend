import XMLParser from 'react-xml-parser';

const API_URL = 'https://www.boardgamegeek.com/xmlapi2/'

export const searchApiGames = games => {
    return {
      type: "SEARCH_API_GAMES",
      games
    }
}

export const fetchGamesFromQuery = (query) => {
    return dispatch => {
        return fetch(API_URL+'search/?query='+query)
            .then(res => res.text())
            .then(data => {
                let xml = new XMLParser().parseFromString(data); 
                dispatch(searchApiGames(xml))
            })
        .catch(err => console.log(err));
    }
}