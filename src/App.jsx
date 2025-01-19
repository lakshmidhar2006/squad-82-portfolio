
//Importing Components 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Squad from './components/Squad';
import Footer from './components/Footer';

//Importing Tools
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/Squad" element={<Squad />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
