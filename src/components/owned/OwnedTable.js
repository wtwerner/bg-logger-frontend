import React from 'react'
import { Table, Button } from 'react-bootstrap'
import OwnedTableRow from './OwnedTableRow'
import GameModal from '../modals/gameModal'

class OwnedTable extends React.Component {
    state = {
        isOpen: false,
        modalGame: null,
        games: this.props.userGames,
        sorted: false
    } 
    
    sortGames = () => {
        const unsorted = [...this.props.userGames]
        if (this.state.sorted === false) {
            console.log("Sorting")
            const sortedGames = unsorted.sort((a, b) => a.rank - b.rank)
            this.setState({
                    games: sortedGames,
                    sorted: true
            })
        } else {
            console.log("Unsorting")
            this.setState({
                games: unsorted,
                sorted: false
            })
        }

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
                <Button onClick={() => this.sortGames()}>{this.state.sorted ? 'Unsort' : 'Sort'}</Button>
                <Table striped hover className="pt-10">
                    <thead>
                        <tr className="text-center">
                            <th>Image</th>
                            <th>Title</th>
                            <th>Rank</th>
                            <th>Players</th>
                            <th>More Info</th>
                            <th>Add a Play</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.games.map(game => {
                            return <OwnedTableRow openModal={this.openModal} game={game} key={game.id} />
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

export default OwnedTable