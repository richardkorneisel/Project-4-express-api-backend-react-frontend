import React from 'react';
import {Link} from "react-router-dom";
import './Nav.css';

function Nav() {
    return (
        <div className='nav'>
            <ul>
                <li><Link to={'../TripGallery'}>Trip Gallery</Link> </li>
                <li> <Link to={'../CreateTrip'}>Create Trip</Link> </li>
                <li> <Link to={'../Instructions'}>Instructions</Link></li>
            </ul>
        </div>
    );
}
export default Nav;