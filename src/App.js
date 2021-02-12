import './App.css';
import React from 'react'
import Main from './components/Main'
import DiscoverContainer from './components/discover/DiscoverContainer'
import OwnedContainer from './components/owned/OwnedContainer'
import WishlistContainer from './components/wishlist/WishlistContainer'
import SessionsContainer from './components/sessions/SessionsContainer'
import LoginContainer from './components/auth/LoginContainer'
import GlobalNavbar from './components/Navbar'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import Container from 'react-bootstrap/Container'
import { Route } from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <GlobalNavbar />
        <Container>
          {/* <Router> */}
            <Route path="/" exact component={Main} />
            <Route path="/discover" exact component={DiscoverContainer} />
            <Route path="/owned" exact component={OwnedContainer} />
            <Route path="/wishlist" exact component={WishlistContainer} />
            <Route path="/sessions" exact component={SessionsContainer} />
            <Route path="/login" exact component={LoginContainer} />
          {/* </Router> */}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
