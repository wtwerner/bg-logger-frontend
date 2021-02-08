// Synchronous Action Creators

export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}




// Asynchronous Action Creators

export const login = creds => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: 'tommy@test.com', password: 'password'}) // Hard Coded to test
        })
    }
}