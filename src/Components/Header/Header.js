import {Link, Route} from 'react-router-dom';
import './Header.css';
import Nav from '../Nav/Nav';
import {Col, Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div>
      <Route>
        <Link className='link' to='/'>
          <Container fluid>
            <Row>
              <Col>
                <h1>Travel Report App</h1></Col>
            </Row>
          </Container>
        </Link>
        <Nav />
      </Route>
    </div>
  );
}

export default Header;