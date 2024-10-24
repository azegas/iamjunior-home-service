import Logo from './assets/logo.png';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} className="logo" alt="Home Service Logo" />
            </div>
            <a href="/"><h1>Home Service</h1></a>
            <div className="links">
                <nav>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
            <div className="login">
                <button onClick={() => navigate('/login')}>Login/Signup</button>
            </div>
        </nav>
    );
}

export default Navbar;
