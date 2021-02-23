import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './modal.css'

export default class GameModal extends React.Component {
    render(){
        return(
            <Modal 
                show={this.props.isOpen} 
                onHide={this.props.closeModal} 
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.game.name} ({this.props.game.year_published}) - Designed by: {this.props.game.primary_designer.name}</Modal.Title>
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