import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import './modal.css';
import '../../photo_style.css';

export default class GameModal extends React.Component {
    starRating = (rating) => {
        if (0 < rating && rating < 1.5) {
            return <span>⭐</span>;
        } else if (1.5 < rating && rating < 2.5) {
            return <span>⭐⭐</span>;
        } else if (2.5 < rating && rating < 3.5) {
            return <span>⭐⭐⭐</span>;
        } else if (3.5 < rating && rating < 4.5) {
            return <span>⭐⭐⭐⭐</span>;
        } else if (4.5 < rating && rating < 5) {
            return <span>⭐⭐⭐⭐⭐</span>;
        }
    };

    render() {
        return (
            <Modal
                show={this.props.isOpen}
                onHide={this.props.closeModal}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.game.name} ({this.props.game.year_published}) -{' '}
                        {this.props.game.primary_designer.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={4} md={2}>
                                <img src={this.props.game.images.small} className="photo" alt="game" />
                            </Col>
                            <Col xs={6} md={4}>
                                Rank: {this.props.game.rank}
                                <br />
                                Players: {this.props.game.min_players}-{this.props.game.max_players}
                                <br />
                                Play Time: {this.props.game.min_playtime}-{this.props.game.max_playtime} minutes
                                <br />
                                Rating: {this.starRating(this.props.game.average_user_rating)} (
                                {this.props.game.num_user_ratings} reviews)
                                <br />
                                {console.log(this.props.game)}
                                <a target="_blank" rel="noreferrer" href={this.props.game.url}>
                                    View on Board Game Atlas
                                </a>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <h6>Description:</h6>
                                <p>{this.props.game.description_preview}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }
}
