// TODO implement aboslute paths with @ 'npm install path?' instead of ../../
import Navbar from './components/layout/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import SearchResults from './pages/SearchResults';
import Page404 from './pages/404';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/reset.css'; // must be imported first, before other styles
import './styles/global.scss';

function App() {

  const [services, setServices] = useState([]);
  const [businesses, setBusinesses] = useState([]);

  // TODO create custom hook for fetching data, DRY
  // TODO create error handling
  useEffect(() => {
    fetch('http://localhost:8000/services')
    .then(response => response.json())
    .then(data => setServices(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/businesses')
    .then(response => response.json())
    .then(data => setBusinesses(data));
  }, []);

  // TODO fix routes as in the example
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home services={services} businesses={businesses} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search/:serviceName" element={<SearchResults services={services} businesses={businesses} />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
