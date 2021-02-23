import React from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'

export default class GameModal extends React.Component {

    state={ 
        name: null,
        image: null,
        rank: null,
        id: null,
        price: null,
        year_published: null,
        min_players: null,
        max_players: null,
        min_playtime: null,
        max_playtime: null,
        description: null,
        primary_designer: null,
        rules: null,
        average_user_rating: null,
        num_user_ratings: null,
        bgg_id: null   
    }   

    handleChange = (e) => this.setState({name: e.target.value})

    render(){
        return(
            <Modal show={this.props.isOpen} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.game.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    BODY
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        )
    }
}