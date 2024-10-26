// TODO implement aboslute paths with @ 'npm install path?' instead of ../../
import Navbar from './components/layout/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import SearchResults from './pages/SearchResults';
import Page404 from './pages/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/reset.css'; // must be imported first, before ot
import './styles/global.scss';

function App() {

  // TODO fix routes as in the example
  // TODO add search page in navbar su active ir pan
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search/:serviceName" element={<SearchResults/>} />
            <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
