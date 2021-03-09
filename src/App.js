import './App.css';
import React from 'react'
import Main from './components/main/Main'
import DiscoverContainer from './components/discover/DiscoverContainer'
import OwnedContainer from './components/owned/OwnedContainer'
import WishlistContainer from './components/wishlist/WishlistContainer'
import PlaysContainer from './components/plays/PlaysContainer'
import LoginContainer from './components/auth/LoginContainer'
import PlayFormContainer from './components/plays/PlayFormContainer'
import GlobalNavbar from './components/navbar/Navbar'
import SignupContainer from './components/auth/SignupContainer'
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
            <Route path="/" exact component={Main} />
            <Route path='/signup' exact render={SignupContainer}/>
            <Route path="/discover" exact component={DiscoverContainer} />
            <Route path="/owned" exact component={OwnedContainer} />
            <Route path="/wishlist" exact component={WishlistContainer} />
            <Route path="/plays" exact component={PlaysContainer} />
            <Route path="/login" exact component={LoginContainer} />
            <Route path="/plays/new" exact component={PlayFormContainer} />
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
