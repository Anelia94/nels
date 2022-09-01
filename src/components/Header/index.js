import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import './Header.scss';

const Header = () => {
    const { value, setValue } = useContext(UserContext);

    const userNavigation = (
        <>
            <li className='nav-link'><Link className='link' to="/logout">Logout</Link></li>
        </>
    )
    const guestNavigation = (
        <>
            <li className='nav-link'><Link className='link' to="/login">Login</Link></li>
            <li className='nav-link'><Link className='link' to="/register">Register</Link></li>
        </>
    )
    return (<header>
        <nav className="navigation">

            <ul className="nav">
                <div className="logo-wrapper">
                    <li className="nav-links"><Link to="/home" className="links">Home</Link></li>
                </div>
                <div className="wrapper">
                    {value ? userNavigation : guestNavigation}
                </div>
            </ul>
        </nav>
    </header>
    );
}

export default Header;