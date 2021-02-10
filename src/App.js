import './App.css';
import React from 'react'
import Login from './components/Login'
import Logout from './components/Logout'
import Main from './components/Main'
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
