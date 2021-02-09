// Synchronous Action Creators

export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

// export const startingAuth = () => {
//     return {
//         type: 'STARTING_AUTH'
//     }
// }



// Asynchronous Action Creators

export const login = credentials => {
    console.log("creds are", credentials);
    return async dispatch => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            });
            const user = await response.json();
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            } 
        } catch (error) {
            console.log(error)
        }
    }
}
