import {Link, Route} from 'react-router-dom';
import './Header.css';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <div className = "Header">
      <Route>
        <Link className='link' to='/'>
         
                <h1>Travel Report App</h1>
          
        </Link>
        <Nav />
      </Route>
    </div>
  );
}

export default Header;