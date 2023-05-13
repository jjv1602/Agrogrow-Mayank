import logo from './logo.svg';
import './App.css';

import Services from './pages/Services';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Index from './pages/Index';
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/about"  element={<About></About>} />
          <Route path="/home"  element={<Index></Index>} />
          <Route path="/contact"  element={<Contact></Contact>} />
          <Route path="/services"  element={<Services></Services>} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
