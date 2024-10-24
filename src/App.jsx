// TODO implement aboslute paths with @ 'npm install path?' instead of ../../
import Navbar from './components/layout/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  useEffect(() => {
    console.log('App component mounted');
  });

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
