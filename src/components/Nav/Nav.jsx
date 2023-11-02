import { Link, useLocation } from 'react-router-dom';

import './Nav.scss';
/* import Game from '../Game/Game.jsx'; */
import Menu from '../Menu/Menu.jsx';
import logo from '../../assets/logos/cogg logo - NOIR SF-06.webp';

function Nav() {
    const location = useLocation();

    return (
        <nav>
            <Link to={`/`}>
                <img className='logoImg' src={logo} alt="Cogg Logo" /> 
            </Link>
            {/* <Game /> */}
            {location.pathname === '/' ? (
                <Menu />
            ) : (
                <Link className='homeLink' to={`/`}>
                    HOME
                </Link>
            )}
        </nav>
    );
}

export default Nav;