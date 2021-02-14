import { fetchGameFromId } from './userGames'

// Synchronous Action Creators

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// Asynchronous Action Creators

export const login = (credentials) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
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
              dispatch(fetchGameFromId(response))
            }
        })
          .catch(console.log)
    }
}

export const logout = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: 'include',
      method: 'DELETE'
    })
      .then(dispatch(clearCurrentUser()))
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: 'include',
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          console.log(response.error)
        } else {
          dispatch(setCurrentUser(response))
          dispatch(fetchGameFromId(response))
        }
      })
      .catch(console.log)
  }
}