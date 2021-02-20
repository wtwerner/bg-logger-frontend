export const updatePlayForm = (formData) => {
    return {
        type: "UPDATE_PLAY_FORM",
        formData
    }
}
  
export const resetPlayForm = () => {
    return {
        type: "RESET_PLAY_FORM"
    }
}