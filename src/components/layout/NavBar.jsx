import Logo from '../../assets/logo.png';
import { useNavigate, NavLink } from "react-router-dom";
import styles from './NavBar.module.scss';
import { clearLocalStorage } from '../../utils/utils';


const Navbar = () => {
    const navigate = useNavigate();
    return (
        // TODO fix order, so that container is INSIDE in navbar, not other way around. same for rest. sot html source is readable
        <div className="container"> 
            <nav className={styles.navbar}>
                <div className={styles.left}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Home Service Logo" onClick={() => navigate('/')} />
                </div>
                <div className={styles.links}>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home Service</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                </div>
            </div>
            <div className={styles.right}>
                <button onClick={() => navigate('/login')}>Login/Signup</button>
                <img style={{width: '30px'}} onClick={clearLocalStorage} src="https://img.icons8.com/?size=100&id=cGxj6HzPbSdJ&format=png&color=000000" />
            </div>
            </nav>
        </div>
    );
}

export default Navbar;
