
import LogoPng from '../../assets/img/logo.png';
import { FaWhatsapp } from "react-icons/fa6";
import headerStyle from './Header.module.css';

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <nav className={headerStyle.nav}>
                <figure>
                    <img className={headerStyle.logo} src={LogoPng} alt="Logo" />
                </figure>
                <ul className={headerStyle.navLinks}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><FaWhatsapp /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;