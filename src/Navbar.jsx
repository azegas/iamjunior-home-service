import Logo from './assets/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} className="logo" alt="Home Service Logo" />
            </div>
            <a href="/"><h1>Home Service</h1></a>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="login">
                <a href="/login">Login/Signup</a>
            </div>
        </nav>
    );
}

export default Navbar;