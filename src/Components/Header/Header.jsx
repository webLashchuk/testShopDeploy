import logo from '../../assets/img/logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header className='Header'>
            <div className="layout">
                <div className="Inner">
                    <img className='Logo' src={logo} alt="Shop" />

                    <nav className='Nav'>
                        <a href="#">Link1</a>
                        <a href="#">Link2</a>
                        <a href="#">Link3</a>
                    </nav>
                </div>
            </div>
            
        </header>
    )
}

export default Header;