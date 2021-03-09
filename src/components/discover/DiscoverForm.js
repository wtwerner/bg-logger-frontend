import React from 'react'
import { connect } from 'react-redux'
import { updateDiscoverForm } from "../../actions/discoverForm.js"
import { fetchGamesFromQuery } from "../../actions/games.js"
import { Form, Button, InputGroup } from 'react-bootstrap'

const DiscoverForm = ({ discoverFormData, updateDiscoverForm, fetchGamesFromQuery }) => {
    
    const handleOnChange = event => {
        const updatedFormInfo = {
            query: event.target.value
        }
        updateDiscoverForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        fetchGamesFromQuery(discoverFormData.query)
    }

    return (
        <Form inline onSubmit={handleOnSubmit}>
            <InputGroup>
                <Form.Control value={discoverFormData.query} placeholder="Discover Games" name="query" type="text" onChange={handleOnChange} />
                <Button variant="primary" type="submit">Search</Button>
            </InputGroup>
        </Form>
    )
}

const mapStateToProps = state => {
    return {
        discoverFormData: state.discoverForm
    }
}

export default connect(mapStateToProps, { updateDiscoverForm, fetchGamesFromQuery })(DiscoverForm)