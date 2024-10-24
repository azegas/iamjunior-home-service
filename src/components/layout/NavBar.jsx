import Logo from '../../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import styles from './NavBar.module.scss';
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={Logo} className={styles.logo} alt="Home Service Logo" />
            </div>
            <a href="/"><h1>Home Service</h1></a>
            <div className={styles.links}>
                <nav>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
            <div className={styles.login}>
                <button onClick={() => navigate('/login')}>Login/Signup</button>
            </div>
        </nav>
    );
}

export default Navbar;
