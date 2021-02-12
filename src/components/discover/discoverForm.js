import React from 'react'
import { connect } from 'react-redux'
import { updateDiscoverForm } from "../../actions/discoverForm.js"
import { fetchGamesFromQuery } from "../../actions/apiGames.js"

const DiscoverForm = ({ discoverFormData, updateDiscoverForm }) => {
    
    const handleOnChange = event => {
        const updatedFormInfo = {
            query: event.target.value
        }
        updateDiscoverForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        fetchGamesFromQuery(discoverFormData)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input value={discoverFormData.query} name="query" type="text" onChange={handleOnChange} />
            <input value="Search" type="submit" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        discoverFormData: state.discoverForm
    }
}

export default connect(mapStateToProps, { updateDiscoverForm, fetchGamesFromQuery } )(DiscoverForm)