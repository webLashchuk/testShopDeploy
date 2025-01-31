import logo from '../../assets/img/logo.svg'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className={s.header}>
            <div className="layout">
                <nav className={s.nav}>
                    <NavLink className={s.link} to="/">
                        <img className={s.logo} src={logo} alt="Shop" />
                    </NavLink>
            
                    <ul className={s.list}>
                        <li>
                            <NavLink className={s.link} to="/">Bestsellers</NavLink>
                        </li>
                        <li>
                            <NavLink className={s.link} to="/cart">Cart</NavLink>
                        </li>
                        <li>
                            <NavLink className={s.link} to="/favorites">Favorites</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;