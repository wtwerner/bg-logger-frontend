export const updateDiscoverForm = (formData) => {
    return {
        type: "UPDATE_DISCOVER_FORM",
        formData
    }
}
  
export const resetDiscoverForm = () => {
    return {
        type: "RESET_DISCOVER_FORM"
    }
}