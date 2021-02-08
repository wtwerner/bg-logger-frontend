import './App.css';
import Login from './components/Login'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div>
      <Container>
        <Login />
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
