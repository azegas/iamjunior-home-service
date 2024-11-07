import '../../styles/global.scss';
import { useUser } from '../../context/UserContext';

const UserDashboard = () => {
    const { user } = useUser();

    return (
        <div className="container">
            <h1 className="title">User Dashboard</h1>
            <p>
                <b>Username:</b> {user.username}
            </p>
        </div>
    );
};

export default UserDashboard;
