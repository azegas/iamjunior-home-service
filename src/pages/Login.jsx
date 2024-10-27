import LoginForm from '../components/auth/LoginForm';
import '../styles/global.scss';  

const Login = () => {
    return (
        <div className="container">
            <h1 className="title">Login</h1>
            <LoginForm />
        </div>
    );
}

export default Login;