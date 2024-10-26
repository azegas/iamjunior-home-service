// TODO implement aboslute paths with @ 'npm install path?' instead of ../../
import { RouterProvider } from "react-router-dom";
import router from './routing/router';
import './styles/reset.css'; // must be imported first, before ot
import './styles/global.scss';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
