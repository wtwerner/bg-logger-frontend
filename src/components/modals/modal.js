import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './modal.css'

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

    render(){
        return(
            <Modal 
                show={this.props.isOpen} 
                onHide={this.props.closeModal} 
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.game.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{this.props.game.description_preview}</p>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        )
    }
}