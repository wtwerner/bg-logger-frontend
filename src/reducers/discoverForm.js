const initialState = {
    query: ''
}

const discoverForm = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DISCOVER_FORM':
            return action.formData
        default:
            return state
    }
}

export default discoverForm;