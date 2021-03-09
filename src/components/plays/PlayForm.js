import React from 'react'
import { connect } from 'react-redux'
import { updatePlayForm, createPlay } from "../../actions/forms.js"
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const PlayForm = ({ formData, updatePlayForm, createPlay, games }) => {

    const history = useHistory();
    
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
        createPlay(formData)
        history.push('/plays')
    }

    return (
        <div>
        <Form onSubmit={handleOnSubmit}>
            <Row>
                <Col>
                        <Form.Label>Game:</Form.Label>
                        <Form.Control as="select" name="game" onChange={handleOnChange}>
                            <option>Select a game</option>
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
                    <Form.Control as="textarea" rows={3} name="notes" onChange={handleOnChange} />
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
        formData: state.forms.play,
        games: state.games.owned
    }
}

export default connect(mapStateToProps, { updatePlayForm, createPlay })(PlayForm)