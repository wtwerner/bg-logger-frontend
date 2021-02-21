import React from 'react'
import { connect } from 'react-redux'
import { updatePlayForm, createPlay } from "../../actions/playForm.js"
import { Form, Button, Row, Col } from 'react-bootstrap'

const PlayForm = ({ formData, updatePlayForm, recordPlay, games }) => {
    
    const handleOnChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...formData,
            [name]: value
        }
        updatePlayForm(updatedFormInfo)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        recordPlay(formData)
    }

    return (
        <div>
        <Form onSubmit={handleOnSubmit}>
            <Row>
                <Col>
                        <Form.Label>Select Game:</Form.Label>
                        <Form.Control as="select" name="game" onChange={handleOnChange}>
                            {games.map(game => {
                                return <option key={game.id} value={game.id}>{game.name}</option>
                            })}
                        </Form.Control>
                </Col>
                <Col xs="2">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="date" name="date" onChange={handleOnChange} />
                </Col>
                <Col xs="3">
                        <Form.Label>Duration (minutes):</Form.Label>
                        <Form.Control type="number" name="duration" onChange={handleOnChange}>
                        </Form.Control>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Form.Label>Players:</Form.Label>
                    <Form.Control type="text" name="players" onChange={handleOnChange} />
                </Col>
                <Col>
                    <Form.Label>Winner:</Form.Label>
                    <Form.Control type="text" name="winner" onChange={handleOnChange} />
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Form.Label>Notes:</Form.Label>
                    <Form.Control as="textarea" rows={3} name="players" onChange={handleOnChange} />
                </Col>
            </Row>
            <br/>
            <Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Row>
        </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        formData: state.playForm,
        games: state.games.owned
    }
}

export default connect(mapStateToProps, { updatePlayForm, createPlay } )(PlayForm)