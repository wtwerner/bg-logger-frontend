import React from 'react'
import { Modal, Container, Row, Col } from 'react-bootstrap'
import './modal.css'
import '../../photo_style.css'

export default class PlayModal extends React.Component {
    render(){
        return(
            <Modal 
                show={this.props.isOpen} 
                onHide={this.props.closeModal} 
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.game.name} ({this.props.game.year_published}) - {this.props.game.primary_designer.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={4} md={2}>
                                <img src={this.props.game.images.small} className="photo" alt="game" />
                            </Col>
                            <Col xs={4} md={2}>
                                Date: 
                                <br/>
                                {this.props.play.date.substring(0,10)}
                            </Col>
                            <Col xs={4} md={2}>
                                Players: 
                                <br/>
                                {this.props.play.players}
                            </Col>
                            <Col xs={4} md={2}>
                                Winner: 
                                <br/>
                                {this.props.play.winner}
                            </Col>
                            <Col>
                                Notes:
                                <br/>
                                {this.props.play.notes}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}