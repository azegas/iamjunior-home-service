import Logo from '../../assets/logo.png';
import { useNavigate, NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { clearLocalStorage } from '../../utils/utils';
import { useUser } from '../../context/UserContext';
import { useFavorite } from '../../context/FavoriteContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, clearUserFromContext } = useUser();
    const { favorites } = useFavorite();

    return (
        // TODO fix order, so that container is INSIDE in navbar, not other way around. same for rest. sot html source is readable
        <div className="container">
            <nav className={styles.navbar}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img className={styles.logo} src={Logo} alt="Home Service Logo" onClick={() => navigate('/')} />
                    </div>
                    <div className={styles.links}>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Home Service
                        </NavLink>
                        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Services
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Contact
                        </NavLink>
                    </div>
                </div>
                <div className={styles.right}>
                    <NavLink to="/favorites">
                        <img
                            className={styles.favoriteIcon}
                            src="https://img.icons8.com/?id=DFU1kReSUccu&format=png&color=000000"
                            alt="Favorites Icon"
                        />
                    </NavLink>

                    {user ? (
                        <>
                            <div className={styles.links}>
                                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
                                    {user.username} Dashboard!
                                </NavLink>
                            </div>
                            <button
                                onClick={() => {
                                    clearUserFromContext();
                                    toast.success(`Logged out successfully, bye ${user.username}!`);
                                    navigate('/');
                                }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <button onClick={() => navigate('/login')}>Login/Signup</button>
                    )}

                    <img
                        style={{ width: '30px' }}
                        onClick={clearLocalStorage}
                        src="https://img.icons8.com/?size=100&id=cGxj6HzPbSdJ&format=png&color=000000"
                    />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
