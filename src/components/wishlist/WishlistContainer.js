import React from 'react'
import Container from 'react-bootstrap/Container'
import WishlistTable from './WishlistTable'
import { connect } from 'react-redux'

class WishlistContainer extends React.Component {
    render() {
        if(this.props.currentUser) {
            return (
                <Container>
                    <WishlistTable userGames={this.props.games.wishlist} />
                </Container>
            )
        } else {
            return <p>Sign up or sign in to see this page.</p>
        }
    } 
}

const mapStateToProps = ({ games, currentUser }) => {
    return {
        games,
        currentUser
    }
}

export default connect(mapStateToProps)(WishlistContainer)