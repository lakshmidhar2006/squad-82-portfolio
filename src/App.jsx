import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Projects from './components/Projects';
import Activities from './components/Activities';
import { Routes, Route } from 'react-router-dom';
import Squad from './components/Squad';

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
        <Route path="/squad" element={<Squad />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
