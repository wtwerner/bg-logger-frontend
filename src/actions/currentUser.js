// Synchronous Action Creators

export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}

// Asynchronous Action Creators

export const login = (credentials) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
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
