import React from 'react'
import { Modal, Container, Row, Col } from 'react-bootstrap'
import './modal.css'
import '../../photo_style.css'
import PlayButton from '../buttons/PlayButton'
import OwnedButton from '../buttons/OwnedButton'

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
                    <Modal.Title>{this.props.game.name} ({this.props.game.year_published}) - {this.props.game.primary_designer.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={4} md={2}>
                                <img src={this.props.game.images.small} className="photo" alt="game" />
                            </Col>
                            <Col xs={4} md={2}>
                                Gameplay info
                            </Col>
                            <Col xs={6} md={4}>
                                Game stats
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <h6>Description:</h6>
                                <p>{this.props.game.description_preview}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <PlayButton />
                    <OwnedButton game={this.props.game} />
                </Modal.Footer>
            </Modal>
        )
    }
}