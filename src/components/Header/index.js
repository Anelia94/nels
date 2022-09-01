import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    const userNavigation = (
        <>
            <li className='nav-link'><Link className='link' to={`/my-profile`}>My Profile</Link></li>
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
                    {guestNavigation}
                </div>
            </ul>
        </nav>
    </header>
    );
}

export default Header;