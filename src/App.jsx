import { RouterProvider } from "react-router-dom";
import router from './routing/router';
import './styles/reset.css'; // must be imported first, before other styles
import './styles/global.scss';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
