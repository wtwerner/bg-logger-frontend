import './App.css';
import React from 'react'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Main from './components/Main'
import GlobalNavbar from './components/Navbar'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import Container from 'react-bootstrap/Container'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <GlobalNavbar />
        <Container>
          {this.props.currentUser ? <Logout /> : <Login />}
          <Main/>
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
