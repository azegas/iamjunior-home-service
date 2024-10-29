import { RouterProvider } from "react-router-dom";
import router from './routing/router';
import './styles/reset.css'; // must be imported first, before other styles
import './styles/global.scss';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;
