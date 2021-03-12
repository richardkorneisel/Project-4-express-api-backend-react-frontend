import {Link, Route} from 'react-router-dom';
import './Header.css';
import Nav from '../Nav/Nav';


function Header() {
  return (
    <div className='Header'>
      <h3>Header Page</h3>
      <Route>
        <Nav />
      </Route>
    </div>
  );
}

export default Header;