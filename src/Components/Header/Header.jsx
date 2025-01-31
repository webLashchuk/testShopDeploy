import logo from '../../assets/img/logo.svg'
import './Header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className="layout">
                <nav className='header-nav'>
                    <img className='logo' src={logo} alt="Shop" />
            
                    <ul className="header-list">
                        <li>
                            <NavLink to="/">Bestsellers</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">Cart</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;