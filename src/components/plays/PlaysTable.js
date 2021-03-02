import React from 'react'
import { Table } from 'react-bootstrap'
import PlayModal from '../modals/playModal'
import PlaysTableRow from './PlaysTableRow'

class PlaysTable extends React.Component {

    state = {
        isOpen: false,
        modalGame: null,
        modalPlay: null
    }
    
    openModal = (game, play) => {
        this.setState({ 
            isOpen: true,
            modalGame: game,
            modalPlay: play
        });
    }

    closeModal = () => this.setState({ isOpen: false });
    
    render() {
        return (
            <>
                <Table>
                    <thead>
                        <tr className="text-center">
                            <th>Game</th>
                            <th>Date</th>
                            <th>Notes</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.userPlays.map(play => {
                            return <PlaysTableRow key={play.id} openModal={this.openModal} games={this.props.ownedGames} play={play} />
                        })}
                    </tbody>
                </Table>

                {this.state.isOpen 
                    ? <PlayModal 
                        closeModal={this.closeModal} 
                        isOpen={this.state.isOpen} 
                        handleSubmit={this.handleSubmit}
                        game={this.state.modalGame}
                        play={this.state.modalPlay}
                        /> 
                    : null 
                }

            </>
        )
    }
    
}

export default PlaysTable