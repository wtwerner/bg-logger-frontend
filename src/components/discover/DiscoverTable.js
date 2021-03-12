import React from 'react'
import { Table } from 'react-bootstrap'
import DiscoverTableRow from './DiscoverTableRow'
import GameModal from '../modals/gameModal'

class DiscoverTable extends React.Component {
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
                            <th>Price</th>
                            <th>More Info</th>
                            <th>Add to Wishlist</th>
                            <th>Add to Owned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.games.map(game => {
                            return <DiscoverTableRow openModal={this.openModal} game={game} key={game.id}/>
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

export default DiscoverTable