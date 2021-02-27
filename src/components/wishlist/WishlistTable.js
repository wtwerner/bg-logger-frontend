import React from 'react'
import { Table } from 'react-bootstrap'
import WishlistTableRow from './WishlistTableRow'
import GameModal from '../modals/gameModal'

class WishlistTable extends React.Component {

    state = {
        isOpen: false,
        modalGame: null
    }
    
    openModal = (game) => {
        this.setState({ 
            isOpen: true,
            modalGame: game
        });
    }
    
    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <>
                <Table striped hover className="pt-10">
                    <thead>
                        <tr className="text-center">
                            <th>Image</th>
                            <th>Title</th>
                            <th>Rank</th>
                            <th>Players</th>
                            <th>More Info</th>
                            <th>Remove</th>
                            <th>Add to Owned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.userGames.map(game => {
                            return <WishlistTableRow openModal={this.openModal} game={game} key={game.id} />
                        })}
                    </tbody>
                </Table>

                {this.state.isOpen 
                    ? <GameModal 
                        closeModal={this.closeModal} 
                        isOpen={this.state.isOpen} 
                        handleSubmit={this.handleSubmit}
                        game={this.state.modalGame}
                        /> 
                    : null 
                }
            </>
        )
    }   
}

export default WishlistTable