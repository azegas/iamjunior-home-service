import { RouterProvider } from "react-router-dom";
import router from './routing/router';
import './styles/reset.css'; // must be imported first, before other styles
import './styles/global.scss';
import { UserProvider } from './context/UserContext';
import { FavoriteProvider } from './context/FavoriteContext';

const App = () => {
  return (
    <UserProvider>
      <FavoriteProvider>
        <RouterProvider router={router} />
      </FavoriteProvider>
    </UserProvider>
  );
};

export default App;
